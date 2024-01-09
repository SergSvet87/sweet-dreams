using API.Entities;
using API.Interfaces;
using API.Models;

namespace API.Services;

public class CartService : ICartService
{
    private readonly IUnitOfWork _unitOfWork;

    public CartService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public Cart GetCart(Guid cartId)
    {
        return _unitOfWork.Cart.GetCartById(cartId);
    }

    public void AddOrUpdateCartItem(Guid cartId, int cartItemId, int quantity)
    {
        // var cart = _unitOfWork.Cart.GetCartById(cartId);
        //
        // if (cart == null)
        // {
        //     cart = new Cart { CartId = cartId, CartItems = new List<CartItem>() };
        // }
        //
        // var cartItem = cart.CartItems.FirstOrDefault(item => item.CartItemId == cartItemId);
        //
        // if (cartItem == null)
        // {
        //     cartItem = new CartItem { CartItemId = cartItemId, Quantity = quantity };
        //     cart.CartItems.Add(cartItem);
        // }
        // else
        // {
        //     cartItem.Quantity = quantity;
        // }
        //
        // _unitOfWork.Cart.AddOrUpdateCartItem(cartItem);
        // _unitOfWork.SaveChangesAsync();

        var cartItem = new CartItem()
        {
            CartId = cartId,
            CartItemId = cartItemId,
            Quantity = quantity
        };
        
        _unitOfWork.Cart.AddOrUpdateCartItem(cartItem);
        _unitOfWork.SaveChangesAsync();
    }

    public void RemoveCartItem(int cartItemId)
    {
        _unitOfWork.Cart.RemoveCartItem(cartItemId);
        _unitOfWork.SaveChangesAsync();
    }
}