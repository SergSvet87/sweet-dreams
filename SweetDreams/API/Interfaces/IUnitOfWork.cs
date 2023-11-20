using API.Interfaces.IRepositories;

namespace API.Interfaces;

public interface IUnitOfWork : IDisposable
{
    public IAppUserRepository AppUser { get; }

    public IAppAdminRepository AppAdmin { get; }

    Task<bool> SaveChangesAsync();
}