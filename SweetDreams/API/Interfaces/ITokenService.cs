namespace API.Interfaces;

public interface ITokenService
{
    string CreateToken(IAppUser user);
    
    string GetEmailFromToken(string token);
}