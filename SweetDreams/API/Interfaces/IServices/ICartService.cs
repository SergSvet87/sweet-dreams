using API.Entities;

namespace API.Interfaces;

public interface ICartService
{
    Cart GetCart(Guid cartId);
    
    void AddOrUpdateCartItem(Guid cartId, int productId, int quantity);
    
    void RemoveCartItem(Guid cartId, int productId);
}