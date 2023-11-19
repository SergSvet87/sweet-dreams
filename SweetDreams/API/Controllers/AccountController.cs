using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using API.Validators;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;
    private readonly IEmailConfirmationService _emailConfirmationService;

    public AccountController(DataContext context, ITokenService tokenService,
        IEmailConfirmationService emailConfirmationService)
    {
        _context = context;
        _tokenService = tokenService;
        _emailConfirmationService = emailConfirmationService;
    }

    /// <summary>
    /// Register a new user.
    /// </summary>
    [HttpPost("register")]
    public async Task<ActionResult> Register(RegisterDto registerDto)
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

        var token = _tokenService.CreateToken(user);
        var confirmationLink = Url.Action
            ("ConfirmEmail", "Account", new { userId = user.Id, token = token }, Request.Scheme);

        //sending email
        string userName = $"{user.FirstName} {user.LastName}";
        string email = user.Email;
        string subject = "Email confirmation.";
        var htmlContent = $"<p>Dear {userName},</p>";
        htmlContent += "<p>Please confirm your email by clicking the following link:</p>";
        htmlContent += $"<a href=\"{confirmationLink}\" target=\"_blank\">Confirm your email</a>";
        htmlContent += "<p>Best regards,<br/>Sweet Dreams Team</p>";

        await _emailConfirmationService.SendConfirmationEmail(subject, email, userName, htmlContent);
        // -----

        return Ok();
    }

    /// <summary>
    /// Executes automatically when user clicks on confirmation link.
    /// </summary>
    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpGet("ConfirmEmail")]
    public async Task<ActionResult<UserDto>> ConfirmEmail(string userId, string token)
    {
        if (userId == String.Empty || token == String.Empty)
            return Unauthorized();

        var emailFromToken = _tokenService.GetEmailFromToken(token);
        if (emailFromToken == String.Empty)
            return Unauthorized();

        var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == int.Parse(userId));
        if (user == null || user.Email != emailFromToken)
            return Unauthorized();

        user.EmailConfirmed = true;

        _context.Users.Update(user);
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

        if (!user.EmailConfirmed)
            return Unauthorized("You should confirm your email first.");

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
    /// Login to existing account via Google.
    /// </summary>
    [HttpGet("login/googleAuth")]
    [Authorize(AuthenticationSchemes = GoogleDefaults.AuthenticationScheme)]
    public async Task<ActionResult<UserDto>> LoginViaGoogle()
    {
        var userClaims = User.Claims.ToList();
        var userEmail = userClaims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

        if (userEmail == default)
            return StatusCode(500);

        var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == userEmail);

        if (user == default)
            return Unauthorized("User not found.");

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
    /// Register a new user via Google.
    /// </summary>
    [HttpGet("register/googleAuth")]
    [Authorize(AuthenticationSchemes = GoogleDefaults.AuthenticationScheme)]
    public async Task<ActionResult<UserDto>> RegisterViaGoogle()
    {
        var userClaims = User.Claims.ToList();
        var userEmail = userClaims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

        if (userEmail == default)
            return StatusCode(500);

        if (await UserExists(userEmail))
            return BadRequest("User with this email already exists.");

        string firstName = default;
        string lastName = default;

        var userName = User.Identity.Name;
        if (userName != default)
        {
            var splitedUserName = userName.Split(' ');

            firstName = splitedUserName.First();
            lastName = splitedUserName.Last();

            if (firstName == lastName)
                lastName = default;
        }

        var user = new AppUser
        {
            FirstName = firstName,
            LastName = lastName,
            Email = userEmail
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return new UserDto
        {
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Token = _tokenService.CreateToken(user)
        };
    }

    private async Task<bool> UserExists(string email)
    {
        return await _context.Users.AnyAsync(x => x.Email == email.ToLower());
    }
}