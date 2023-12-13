namespace API.Interfaces;

public interface IEmailConfirmationService
{
    Task SendConfirmationEmail(string subject, string toEmail, string userName, string html);
}