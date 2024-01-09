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
        if (cartItem.CartItemId == 0)
        {
            _context.CartItems.Add(cartItem);
        }
        else
        {
            _context.CartItems.Update(cartItem);
        }
    }

    public void RemoveCartItem(int cartItemId)
    {
        var cartItem = _context.CartItems.Find(cartItemId);

        if (cartItem != null)
        {
            _context.CartItems.Remove(cartItem);
        }
    }
}