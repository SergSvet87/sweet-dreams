using System.Linq.Expressions;
using API.Entities;

namespace API.Interfaces.IRepositories;

public interface IOrderRepository : IGenericRepository<Order>
{
    IEnumerable<Order> GetUserOrders(int userId, params Expression<Func<Order, object>>[] includes);
}