using System.Security.Claims;

namespace API.Extensions;

public static class ClaimsPrincipalExtensions
{
    public static string GetName(this ClaimsPrincipal user)
    {
        return user.Identity.Name;
    }
    
    public static string GetEmail(this ClaimsPrincipal user)
    {
        return user.FindFirst(c => c.Type == ClaimTypes.Email)?.Value;
    }
}