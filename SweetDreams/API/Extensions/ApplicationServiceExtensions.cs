using API.Data;
using API.Entities;
using API.Interfaces;
using API.Services;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddCors();
        services.AddScoped<ITokenService, TokenService>();
        services.AddTransient<IEmailConfirmationService, EmailConfirmationService>();
        services.AddTransient<IUnitOfWork, UnitOfWork>();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.AddTransient<ISortingAndPagingService<Product>, SortingAndPagingService<Product>>();
        services.AddTransient<ICartService, CartService>();
        services.AddTransient<IOrderService, OrderService>();

        return services;
    }
}