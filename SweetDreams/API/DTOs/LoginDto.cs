using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class LoginDto
{
    [Required]
    // [EmailAddress]
    // [MinLength(8)]
    // [MaxLength(255)]
    public string Email { get; set; }

    [Required]
    // [MinLength(8)]
    // [MaxLength(255)]
    // [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$",
    //     ErrorMessage = "The field must contain at least one uppercase letter, one lowercase letter, and one number.")]
    public string Password { get; set; }
}