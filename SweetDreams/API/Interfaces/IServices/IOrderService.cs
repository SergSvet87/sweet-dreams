using API.DTOs;
using API.Entities;
using API.Models;

namespace API.Interfaces;

public interface IOrderService
{
    Task PlaceOrder(int userId, List<CartItemDto> cartItems);

    List<Order> GetUserOrders(int userId);
}