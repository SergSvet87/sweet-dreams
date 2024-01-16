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

    /// <summary>
    /// Get cart by id(guid).
    /// </summary>
    [HttpGet("{cartId}")]
    public ActionResult<Cart> GetCart(Guid cartId)
    {
        var cart = _cartService.GetCart(cartId);

        return Ok(cart);
    }


    /// <summary>
    /// Add or update cart.
    /// </summary>
    [HttpPost]
    public ActionResult AddOrUpdateCart(AddOrUpdateCartDto addOrUpdateCartDto)
    {
        _cartService.AddOrUpdateCartItem(addOrUpdateCartDto.CartId, addOrUpdateCartDto.ProductId,
            addOrUpdateCartDto.Quantity);

        return Ok();
    }

    /// <summary>
    /// Remove item form cart.
    /// </summary>
    [HttpDelete("{cartId}/{productId}")]
    public ActionResult RemoveCartItem(Guid cartId, int productId)
    {
        _cartService.RemoveCartItem(cartId, productId);

        return Ok();
    }
}