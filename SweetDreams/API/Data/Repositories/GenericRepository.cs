using System.Linq.Expressions;
using API.Interfaces.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : class // TODO: Add Logger
{
    protected readonly DataContext _context;

    public GenericRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public  async Task<T> GetById(int id)
    {
        return await _context.Set<T>().FindAsync(id);
    }

    public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
    { 
        return _context.Set<T>().Where(expression);
    }

    public void Add(T entity)
    { 
        _context.Set<T>().Add(entity);
    }

    public void AddRange(IEnumerable<T> entities)
    {
        _context.Set<T>().AddRange(entities);
    }

    public void Delete(T entity)
    {
        _context.Set<T>().Remove(entity);
    }

    public void DeleteRange(IEnumerable<T> entities)
    {
        _context.Set<T>().RemoveRange(entities);
    }

    public void Update(T entity)
    {
        _context.Set<T>().Update(entity);
    }
}