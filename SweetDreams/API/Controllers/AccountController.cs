using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using API.Validators;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;
    private readonly IEmailConfirmationService _emailConfirmationService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public AccountController(DataContext context, ITokenService tokenService,
        IEmailConfirmationService emailConfirmationService, IUnitOfWork unitOfWork, IMapper mapper)
    {
        _context = context;
        _tokenService = tokenService;
        _emailConfirmationService = emailConfirmationService;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
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

        if (await _unitOfWork.AppUser.UserExists(registerDto.Email))
            return BadRequest("User with this email already exists.");

        using var hmac = new HMACSHA512();

        var user = _mapper.Map<AppUser>(registerDto);
        user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password));
        user.PasswordSalt = hmac.Key;

        _unitOfWork.AppUser.Add(user);
        await _unitOfWork.SaveChangesAsync();

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

        var userDto = _mapper.Map<UserDto>(user);
        userDto.Token = _tokenService.CreateToken(user);

        return StatusCode(201, userDto);
    }

    /// <summary>
    /// Executes automatically when user clicks on confirmation link.
    /// </summary>
    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpGet("ConfirmEmail")]
    public async Task<ActionResult<UserDto>> ConfirmEmail(string userId, string token)
    {
        if (userId == string.Empty || token == string.Empty)
            return Unauthorized();

        var emailFromToken = _tokenService.GetEmailFromToken(token);
        if (emailFromToken == string.Empty)
            return Unauthorized();

        var user = await _unitOfWork.AppUser.GetById(int.Parse(userId)); // TODO: test manually changed id.
        if (user == null || user.Email != emailFromToken)
            return Unauthorized();

        user.EmailConfirmed = true;

        _unitOfWork.AppUser.Update(user);
        await _unitOfWork.SaveChangesAsync();

        var userDto = _mapper.Map<UserDto>(user);
        userDto.Token = _tokenService.CreateToken(user);

        return userDto;
    }

    /// <summary>
    /// Login to existing account.
    /// </summary>
    /// <remarks>Email: bob@test.com Pass: P@ssw0rd</remarks>>
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _unitOfWork.AppUser.GetByEmail(loginDto.Email);

        if (user == default)
            return Unauthorized("Invalid email.");

        if (user.PasswordSalt == default || user.PasswordHash == default)
            return Unauthorized();

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i])
                return Unauthorized("Invalid password.");
        }

        if (!user.EmailConfirmed)
            return Unauthorized("You should confirm your email first.");

        var userDto = _mapper.Map<UserDto>(user);
        userDto.Token = _tokenService.CreateToken(user);

        return userDto;
    }

    /// <summary>
    /// Login to existing account via Google.
    /// </summary>
    [HttpGet("googleAuth/login")]
    [Authorize(AuthenticationSchemes = GoogleDefaults.AuthenticationScheme)]
    public async Task<ActionResult<UserDto>> LoginViaGoogle()
    {
        // var userClaims = User.Claims.ToList();
        // var userEmail = userClaims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
        //
        // if (userEmail == default)
        //     return StatusCode(500);
        //
        // var user = await _unitOfWork.AppUser.FindByEmail(userEmail);

        var user = await _unitOfWork.AppUser.GetByEmail(User.GetEmail());
        if (user == default)
            return Unauthorized("User not found. You should register first.");

        var userDto = _mapper.Map<UserDto>(user);
        userDto.Token = _tokenService.CreateToken(user);

        return userDto;
    }

    /// <summary>
    /// Register a new user via Google.
    /// </summary>
    [HttpGet("googleAuth/register")]
    [Authorize(AuthenticationSchemes = GoogleDefaults.AuthenticationScheme)]
    public async Task<ActionResult<UserDto>> RegisterViaGoogle()
    {
        // var userClaims = User.Claims.ToList();
        // var userEmail = userClaims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
        var userEmail = User.GetEmail();
        
        if (userEmail == default)
            return StatusCode(500);

        if (await _unitOfWork.AppUser.UserExists(userEmail))
            return BadRequest("User with this email already exists.");

        string? firstName = default;
        string? lastName = default;

        var userName = User.GetName();
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

        _unitOfWork.AppUser.Add(user);
        await _unitOfWork.SaveChangesAsync();

        var userDto = _mapper.Map<UserDto>(user);
        userDto.Token = _tokenService.CreateToken(user);

        return StatusCode(201, userDto);
    }
}