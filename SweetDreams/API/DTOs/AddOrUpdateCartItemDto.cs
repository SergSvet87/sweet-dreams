namespace API.Extensions;

public class AddOrUpdateCartItemDto
{
    public Guid CartId { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }
}