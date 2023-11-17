namespace API.DTOs;

public class RegisterDto
{
    // [Required]
    // [MinLength(2)]
    // [MaxLength(100)]
    // [RegularExpression("^[a-zA-Z]+$",
    //     ErrorMessage = "The field must contain only letters.")]
    public string FirstName { get; set; }

    // [Required]
    // [MinLength(2)]
    // [MaxLength(100)]
    // [RegularExpression("^[a-zA-Z]+$",
    //     ErrorMessage = "The field must contain only letters.")]
    public string LastName { get; set; }

    // [Required]
    // [Phone]
    // [MinLength(10)]
    // [MaxLength(15)]
    public string Phone { get; set; }

    // [Required]
    // [EmailAddress]
    // [MinLength(8)]
    // [MaxLength(255)]
    public string Email { get; set; }

    // [Required]
    // [MinLength(8)]
    // [MaxLength(255)]
    // [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$",
    //     ErrorMessage = "The field must contain at least one uppercase letter, one lowercase letter, and one number.")]
    public string Password { get; set; }
}