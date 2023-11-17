using API.Interfaces;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace API.Services;

public class EmailConfirmationService : IEmailConfirmationService
{
    private readonly string _userName;
    private readonly string _key;

    public EmailConfirmationService(IConfiguration config)
    {
        _userName = config["Authentication:SendGrid:UserName"];
        _key = config["Authentication:SendGrid:SecretKey"];
    }

    public async Task SendConfirmationEmail(string subject, string toEmail, string userName, string message)
    {
        var apiKey = _key;
        var client = new SendGridClient(apiKey);
        var from = new EmailAddress("sweetdreams2023777@gmail.com", "Sweet Dreams");
        var to = new EmailAddress(toEmail, userName);
        var plainTextContent = message;
        var htmlContent = "";
        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
        var response = await client.SendEmailAsync(msg);
    }
}