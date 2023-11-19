using API.Data.Repositories;
using API.Entities;
using API.Interfaces;
using API.Interfaces.IRepositories;

namespace API.Data;

public class UnitOfWork : IUnitOfWork, IDisposable
{
    private readonly DataContext _context;

    public UnitOfWork(DataContext context)
    {
        _context = context;
        AppUser = new AppUserRepository(_context);
        AppAdmin = new AppAdminRepository(_context);
    }

    public IAppUserRepository AppUser { get; private set; }

    public IAppAdminRepository AppAdmin { get; private set; }

    public async Task<int> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}