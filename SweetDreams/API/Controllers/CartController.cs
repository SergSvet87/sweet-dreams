using API.Entities;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CartController : BaseApiController
{
    private readonly ICartService _cartService;

    public CartController(ICartService cartService)
    {
        _cartService = cartService;
    }
    
    [HttpGet("{cartId}")]
    public ActionResult<Cart> GetCart(Guid cartId) // TODO: Сделать так, чтобы возвращалось содержимое корзины, а не только ИД.
    {
        var cart = _cartService.GetCart(cartId);
        
        return Ok(cart);
    }

    [HttpPost]
    public ActionResult AddOrUpdateCartItem(AddOrUpdateCartItemDto addOrUpdateCartItemDto)
    {
        _cartService.AddOrUpdateCartItem(addOrUpdateCartItemDto.CartId, addOrUpdateCartItemDto.ProductId, 
            addOrUpdateCartItemDto.Quantity);
        
        return Ok();
    }

    [HttpDelete("{cartItemId}")]
    public ActionResult RemoveCartItem(int cartItemId)
    {
        _cartService.RemoveCartItem(cartItemId);
        
        return Ok();
    }
}