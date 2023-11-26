using API.Entities;

namespace API.DTOs;

public class ProductDto
{
    public string Name { get; set; }

    public string Description { get; set; }

    public decimal Price { get; set; }

    public double? Rating { get; set; }
    
    // public List<Photo> Photos { get; set; } = new();
}