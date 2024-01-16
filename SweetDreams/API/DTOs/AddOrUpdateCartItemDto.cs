namespace API.Extensions;

public class AddOrUpdateCartDto
{
    public Guid CartId { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }
}