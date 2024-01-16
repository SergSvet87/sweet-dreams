using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Models;

namespace API.Services;

public class OrderService : IOrderService
{
    private readonly IUnitOfWork _unitOfWork;

    public OrderService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    //TODO сделать так, чтобы ИД брался с клеймов токена. 
    public async Task PlaceOrder(int userId, List<CartItemDto> cartItems)
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

        _unitOfWork.Order.Add(order);
        await _unitOfWork.SaveChangesAsync();
    }

    public List<Order> GetUserOrders(int userId)
    {
        return _unitOfWork.Order.GetUserOrders(userId, x => x.OrderItems).ToList();
    }
}