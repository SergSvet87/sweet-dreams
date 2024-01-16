using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class OrderController : BaseApiController
{
    private readonly IOrderService _orderService;

    public OrderController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    //TODO сделать так, чтобы каждый пользователь имел доступ только к своим заказам. 
    [HttpPost]
    public async Task<ActionResult> PlaceOrder(PlaceOrderDto placeOrderDto)
    {
        await _orderService.PlaceOrder(placeOrderDto.UserId, placeOrderDto.CartItems);
        return Ok();
    }

    //TODO сделать описание модово для свагера.
    [HttpGet("{userId}")]
    public ActionResult<List<Order>> GetUserOrders(int userId)
    {
        var userOrders = _orderService.GetUserOrders(userId);
        return Ok(userOrders);
    }
}