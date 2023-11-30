using API.Entities;
using API.Interfaces.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class AppAdminRepository : GenericRepository<AppAdmin>, IAppAdminRepository
{
    public AppAdminRepository(DataContext context) : base(context)
    {
    }

    public async Task<AppAdmin> GetByEmail(string email)
    {
        return await _context.Admins.FirstOrDefaultAsync(x => x.Email == email.ToLower());
    }
}