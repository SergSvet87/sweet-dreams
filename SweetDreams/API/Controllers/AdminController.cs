using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AdminController : BaseApiController
{
    private readonly ITokenService _tokenService;
    private readonly IUnitOfWork _unitOfWork;

    public AdminController(ITokenService tokenService, IUnitOfWork unitOfWork)
    {
        _tokenService = tokenService;
        _unitOfWork = unitOfWork;
    }

    /// <summary>
    /// Login as admin.
    /// </summary>
    /// <remarks>Email: admin@example.com Pass: P@ssw0rd</remarks>
    [HttpPost("login")]
    public async Task<ActionResult<AdminDto>> Login(LoginDto loginDto)
    {
        var user = await _unitOfWork.AppAdmin.GetByEmail(loginDto.Email);

        if (user == default)
            return Unauthorized("Invalid email.");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i])
                return Unauthorized("Invalid password.");
        }

        return new AdminDto
        {
            Email = user.Email,
            Token = _tokenService.CreateToken(user)
        };
    }

    // [HttpPost("register")] // development method created for adding admins
    // public async Task<ActionResult> Register(RegisterDto registerDto)
    // {
    //     using var hmac = new HMACSHA512();
    //
    //     var user = new AppAdmin
    //     {
    //         Email = registerDto.Email.ToLower(),
    //         PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
    //         PasswordSalt = hmac.Key
    //     };
    //     
    //     _unitOfWork.AppAdmin.Add(user);
    //     await _unitOfWork.SaveChangesAsync();
    //     
    //     return Ok();
    // }
}