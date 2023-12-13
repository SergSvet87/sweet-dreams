using System.Linq.Expressions;

namespace API.Interfaces.IRepositories;

public interface IGenericRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAll();

    Task<T> GetById(int id);

    IEnumerable<T> Find(Expression<Func<T, bool>> expression);

    void Add(T entity);

    void AddRange(IEnumerable<T> entities);

    void Delete(T entity);

    void DeleteRange(IEnumerable<T> entities);

    void Update(T entity);
}