using API.Enums;
using Newtonsoft.Json;

namespace API.Entities;

public class Product // TODO: Add photo for products using cloudinary.
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }
    
    public ProductCategories Category { get; set; }

    public decimal Price { get; set; }

    public double? Rating { get; set; }

    public bool IsDairyFree { get; set; } = false;
    
    public bool IsGlutenFree { get; set; } = false;
    
    public bool IsVegeterian { get; set; } = false;
    
    public List<Photo> Photos { get; set; } = new(); // TODO Decide how to add photos to product
}