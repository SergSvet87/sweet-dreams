using API.Entities;
using API.Interfaces.IRepositories;

namespace API.Data.Repositories;

public class AppAdminRepository : GenericRepository<AppAdmin>, IAppAdminRepository
{
    public AppAdminRepository(DataContext context) : base(context)
    {
    }
}