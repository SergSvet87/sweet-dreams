using API.Interfaces.IRepositories;

namespace API.Interfaces;

public interface IUnitOfWork : IDisposable
{
    public IAppUserRepository AppUser { get; }

    public IAppAdminRepository AppAdmin { get; }

    public IProductRepository Product { get; }
    
    public ICartRepository Cart { get; set; }

    Task<bool> SaveChangesAsync();
}