using System.Linq.Expressions;
using API.DTOs;
using API.Entities;

namespace API.Interfaces.IRepositories;

public interface IOrderRepository : IGenericRepository<Order>
{
    IEnumerable<Order> GetUserOrders(int userId);

    Task CreateOrder(int userId, List<CartItemDto> cartItems);
}