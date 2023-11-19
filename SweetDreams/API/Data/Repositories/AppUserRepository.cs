using API.Entities;
using API.Interfaces.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class AppUserRepository : GenericRepository<AppUser>, IAppUserRepository
{
    public AppUserRepository(DataContext context) : base(context)
    {
    }

    public async Task<AppUser> FindByEmail(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
    }

    public async Task<bool> UserExists(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);

        if (user == default)
            return false;

        return true;
    }
}