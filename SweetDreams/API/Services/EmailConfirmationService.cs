using API.Interfaces;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace API.Services;

public class EmailConfirmationService : IEmailConfirmationService
{
    private readonly string _key = Environment.GetEnvironmentVariable("SendGridSecret");

    public async Task SendConfirmationEmail(string subject, string toEmail, string userName, string html)
    {
        var apiKey = _key;
        var client = new SendGridClient(apiKey);
        var from = new EmailAddress("candyheaven2023@gmail.com", "Candy Heaven");
        var to = new EmailAddress(toEmail, userName);
        var plainTextContent = "";
        var htmlContent = html;
        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
        var response = await client.SendEmailAsync(msg);
    }
}