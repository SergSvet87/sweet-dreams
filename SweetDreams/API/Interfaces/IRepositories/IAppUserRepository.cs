using API.Entities;

namespace API.Interfaces.IRepositories;

public interface IAppUserRepository : IGenericRepository<AppUser>
{
    Task<AppUser> GetByEmail(string email);

    Task<bool> UserExists(string email);
}