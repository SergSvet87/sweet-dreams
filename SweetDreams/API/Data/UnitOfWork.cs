using API.Data.Repositories;
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
        Product = new ProductRepository(_context);
        Cart = new CartRepository(_context);
    }

    public IAppUserRepository AppUser { get; private set; }

    public IAppAdminRepository AppAdmin { get; private set; }

    public IProductRepository Product { get; private set; }
    
    public ICartRepository Cart { get; set; }

    public async Task<bool> SaveChangesAsync()
    {
        if (await _context.SaveChangesAsync() > 0)
            return true;

        return false;
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}