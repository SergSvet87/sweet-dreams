namespace API.DTOs;

public class CreateProductDto // TODO Add validation for this dto
{
    public string Name { get; set; }

    public string Description { get; set; }

    public decimal Price { get; set; }
}