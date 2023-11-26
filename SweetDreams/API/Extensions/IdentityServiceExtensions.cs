using System.Text;
using API.Data;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"])),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        
        services.AddIdentity<IdentityUser, IdentityRole>()
            .AddEntityFrameworkStores<DataContext>();
        
        services.AddAuthentication(
            v => {
                v.DefaultAuthenticateScheme = GoogleDefaults.AuthenticationScheme;
                v.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
            }).AddGoogle(googleOptions =>
        {
            googleOptions.ClientId = config["Authentication:Google:ClientId"];
            googleOptions.ClientSecret = config["Authentication:Google:ClientSecret"];
        });
        
        return services;
    }
}