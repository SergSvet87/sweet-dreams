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

    public void AddOrUpdateCartItem(Guid cartId, int productId, int quantity)
    {
        var cartItem = new CartItem()
        {
            CartId = cartId,
            ProductId = productId,
            Quantity = quantity
        };

        _unitOfWork.Cart.AddOrUpdateCartItem(cartItem);
    }

    public void RemoveCartItem(Guid cartId, int productId)
    {
        _unitOfWork.Cart.RemoveCartItem(cartId, productId);
        _unitOfWork.SaveChangesAsync();
    }
}