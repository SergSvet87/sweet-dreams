using API.DTOs;
using FluentValidation;

namespace API.Validators;

public class RegisterDtoValidator : AbstractValidator<RegisterDto>
{
    public RegisterDtoValidator()
    {
        RuleFor(x => x.FirstName)
            .NotEmpty()
            .WithMessage("FirstName is required.")
            .Length(2, 100)
            .WithMessage("FirstName length should be between 2 and 100.")
            .Matches("^[a-zA-Z]+$")
            .WithMessage("FirstName must contain only letters.");

        RuleFor(x => x.LastName)
            .NotEmpty()
            .WithMessage("LastName is required.")
            .Length(2, 100)
            .WithMessage("LastName length should be between 2 and 100.")
            .Matches("^[a-zA-Z]+$")
            .WithMessage("LastName must contain only letters.");

        RuleFor(x => x.Phone)
            .NotEmpty()
            .WithMessage("Phone is required.")
            .Matches("^[0-9+()-]{10,15}$")
            .WithMessage("Phone number must be between 10 and 15 digits. Only + - ( ) symbols allowed.");

        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Email is required.")
            .EmailAddress()
            .WithMessage("Incorrect email signature.");

        RuleFor(x => x.Password)
            .NotEmpty()
            .WithMessage("Password is required.")
            .Length(8, 255)
            .WithMessage("Password length should be between 8 and 255.")
            .Matches(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$")
            .WithMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number.")
            .NotEqual(x => x.Email)
            .WithMessage("Password cant equals email.");
    }
}