using API.Models;
using Newtonsoft.Json;

namespace API.Entities;

public class Cart
{
    public Guid CartId { get; set; }

    public List<CartItem> CartItems { get; set; }
}