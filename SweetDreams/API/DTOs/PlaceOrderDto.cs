namespace API.DTOs;

public class PlaceOrderDto
{
    public int UserId { get; set; }

    public List<CartItemDto> CartItems { get; set; }
}