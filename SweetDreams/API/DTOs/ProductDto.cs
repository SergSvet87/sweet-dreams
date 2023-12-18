using API.Enums;

namespace API.DTOs;

public class ProductDto
{
    public int Id { get; set; }
    
    public string Name { get; set; }

    public string Description { get; set; }

    public ProductCategories Category { get; set; }

    public decimal Price { get; set; }

    public double? Rating { get; set; }
    
    public bool IsDairyFree { get; set; }
    
    public bool IsGlutenFree { get; set; }
    
    public bool IsVegeterian { get; set; }
    
    // public List<Photo> Photos { get; set; } = new();
}