using API.Entities;
using Newtonsoft.Json;

namespace API.Models;

public class CartItem
{
    public int CartItemId { get; set; }

    public int ProductId { get; set; }

    public Guid CartId { get; set; }

    [JsonIgnore] public Cart Cart { get; set; }
    public int Quantity { get; set; }
}