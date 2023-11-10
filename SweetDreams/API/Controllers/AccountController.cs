using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using API.Validators;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;

    public AccountController(DataContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

    /// <summary>
    /// Register a new user.
    /// </summary>
    /// <param name="registerDto"></param>
    /// <returns>A newly created user.</returns>
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        var validationResult = await new RegisterDtoValidator().ValidateAsync(registerDto);
        if (!validationResult.IsValid)
            return BadRequest(validationResult.GetErrorMessages());

        if (await UserExists(registerDto.Email))
            return BadRequest("User with this email already exists.");

        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,
            Phone = registerDto.Phone,
            Email = registerDto.Email.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return new UserDto
        {
            FirstName = user.FirstName,
            LastName = user.LastName,
            Phone = user.Phone,
            Email = user.Email,
            Token = _tokenService.CreateToken(user)
        };
    }

    /// <summary>
    /// Login to existing account.
    /// </summary>
    /// <param name="loginDto"></param>
    /// <returns>All info about user except password hash and salt</returns>
    /// <remarks>Email: bob@test.com Pass: P@ssw0rd</remarks>
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == loginDto.Email);

        if (user == default)
            return Unauthorized("Invalid email.");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i])
                return Unauthorized("Invalid password.");
        }

        return new UserDto
        {
            FirstName = user.FirstName,
            LastName = user.LastName,
            Phone = user.Phone,
            Email = user.Email,
            Token = _tokenService.CreateToken(user)
        };
    }

    private async Task<bool> UserExists(string email)
    {
        return await _context.Users.AnyAsync(x => x.Email == email.ToLower());
    }
}