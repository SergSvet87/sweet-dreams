using System.Linq.Expressions;
using API.Entities;
using API.Interfaces.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class OrderRepository : GenericRepository<Order>, IOrderRepository
{
    public OrderRepository(DataContext context) : base(context)
    {
    }

    public IEnumerable<Order> GetUserOrders(int userId, params Expression<Func<Order, object>>[] includes)
    {
        var query = _context.Orders.Where(order => order.UserId == userId).AsQueryable();

        foreach (var include in includes)
        {
            query = query.Include(include);
        }

        return query.ToList();
    }
}