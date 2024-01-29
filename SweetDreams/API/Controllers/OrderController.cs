using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class OrderController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public OrderController(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    //TODO сделать так, чтобы каждый пользователь имел доступ только к своим заказам.(проверка токена в котором будет юзерИД)
    /// <summary>
    /// Place order.
    /// </summary>
    [HttpPost]
    public async Task<ActionResult> PlaceOrder(PlaceOrderDto placeOrderDto)
    {
        await _unitOfWork.Order.CreateOrder(placeOrderDto.UserId, placeOrderDto.CartItems);
        return Ok();

        // await _orderService.PlaceOrder(placeOrderDto.UserId, placeOrderDto.CartItems);
        // return Ok();
    }

    /// <summary>
    /// Get user orders by id.
    /// </summary>
    [HttpGet("{userId}")]
    public ActionResult<List<Order>> GetUserOrders(int userId) // TODO Create DTO and mapping for this method
    {
        var orders = _unitOfWork.Order.GetUserOrders(userId);
        return Ok(orders);

        //TODO: I should check userId before sending the response. To avoid fraud. (if userId in token == sent userId - all Ok.)
        //need to think about it.
    }

    /// <summary>
    /// Get all orders (available only for admin).
    /// </summary>
    [HttpGet]
    public ActionResult<List<Order>> GetOrders(int userId)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Get all orders (available only for admin).
    /// </summary>
    [HttpDelete("{id}")]
    public ActionResult<List<Order>> DeleteOrderById(int id)
    {
        throw new NotImplementedException();
    }
}