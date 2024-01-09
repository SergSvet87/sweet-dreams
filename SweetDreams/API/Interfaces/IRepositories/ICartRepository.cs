using API.Entities;
using API.Models;

namespace API.Interfaces.IRepositories;

public interface ICartRepository : IGenericRepository<Cart>
{
    Cart GetCartById(Guid cartId);
    
    void AddOrUpdateCartItem(CartItem cartItem);
    
    void RemoveCartItem(int cartItemId);
}