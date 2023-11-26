namespace API.DTOs;

public class UpdateProductDto // TODO Add validation for this Dto
{
    public string Name { get; set; }

    public string Description { get; set; }

    public decimal Price { get; set; }
}