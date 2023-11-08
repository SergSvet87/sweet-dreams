using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AdminController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;

    public AdminController(DataContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

    // [HttpPost("login")]
    // public async Task<ActionResult<AppAdmin>> Login(LoginDto loginDto)
    // {
    //     
    // }
}