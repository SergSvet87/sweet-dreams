using API.Entities;
using API.Interfaces.IRepositories;

namespace API.Data.Repositories;

public class AppUserRepository : GenericRepository<AppUser>, IAppUserRepository
{
    public AppUserRepository(DataContext context) : base(context)
    {
    }
}