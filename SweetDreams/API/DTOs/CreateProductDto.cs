using API.Enums;

namespace API.DTOs;

public class CreateProductDto // TODO Add validation for this dto
{
    public string Name { get; set; }

    public string Description { get; set; }
    
    public ProductCategories Category { get; set; }

    public decimal Price { get; set; }
    
    public double? Rating { get; set; } 
    
    public bool IsDairyFree { get; set; }
    
    public bool IsGlutenFree { get; set; }
    
    public bool IsVegeterian { get; set; }
}