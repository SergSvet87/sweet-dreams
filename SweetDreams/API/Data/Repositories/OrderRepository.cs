using System.Linq.Expressions;
using API.DTOs;
using API.Entities;
using API.Interfaces.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class OrderRepository : GenericRepository<Order>, IOrderRepository
{
    public OrderRepository(DataContext context) : base(context)
    {
    }

    public IEnumerable<Order> GetUserOrders(int userId)
    {
        var orders = _context.Orders
            .Include(x => x.OrderItems)
            .Where(x => x.UserId == userId)
            .ToList();

        return orders;
    }

    public async Task CreateOrder(int userId, List<CartItemDto> cartItems)
    {
        var order = new Order
        {
            UserId = userId,
            OrderDate = DateTime.UtcNow,
            OrderItems = cartItems.Select(ci => new OrderItem
            {
                ProductId = ci.ProductId,
                Quantity = ci.Quantity
            }).ToList()
        };

        _context.Add(order);
        await _context.SaveChangesAsync();
    }
}