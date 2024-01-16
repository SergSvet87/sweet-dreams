using API.Entities;
using API.Interfaces.IRepositories;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class CartRepository : GenericRepository<Cart>, ICartRepository
{
    public CartRepository(DataContext context) : base(context)
    {
    }

    public Cart GetCartById(Guid cartId)
    {
        return _context.Carts.Include(x => x.CartItems).FirstOrDefault(x => x.CartId == cartId);
    }

    public void AddOrUpdateCartItem(CartItem cartItem)
    {
        var cart = _context.Carts
            .Include(c => c.CartItems)
            .FirstOrDefault(c => c.CartId == cartItem.CartId);

        if (cart == null)
        {
            cart = new Cart { CartId = cartItem.CartId, CartItems = new List<CartItem>() };
            _context.Carts.Add(cart);
        }

        var existingCartItem = cart.CartItems
            .FirstOrDefault(x => x.CartId == cartItem.CartId && x.ProductId == cartItem.ProductId);

        if (existingCartItem == null)
        {
            existingCartItem = new CartItem { ProductId = cartItem.ProductId, Quantity = cartItem.Quantity };
            cart.CartItems.Add(existingCartItem);
        }
        else
        {
            existingCartItem.Quantity = cartItem.Quantity;
        }

        _context.SaveChanges();
    }

    public void RemoveCartItem(Guid cartId, int productId)
    {
        var cartItem = _context.CartItems.FirstOrDefault(x => x.CartId == cartId && x.ProductId == productId);

        if (cartItem != null)
        {
            _context.CartItems.Remove(cartItem);
            _context.SaveChanges();
        }
    }
}