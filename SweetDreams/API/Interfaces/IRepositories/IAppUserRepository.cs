using API.Entities;

namespace API.Interfaces.IRepositories;

public interface IAppUserRepository : IGenericRepository<AppUser> // TODO decide is this interface mecessary
{
    Task<AppUser> GetByEmail(string email);
    
    Task<bool> UserExists(string email);
}