namespace API.Interfaces;

public interface ITokenService
{
    string CreateToken(IAppUser user, bool isAdmin = false);
    
    string GetEmailFromToken(string token);
}