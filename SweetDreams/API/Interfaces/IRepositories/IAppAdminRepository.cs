using API.Entities;

namespace API.Interfaces.IRepositories;

public interface
    IAppAdminRepository : IGenericRepository<AppAdmin>
{
    Task<AppAdmin> GetByEmail(string email);
}