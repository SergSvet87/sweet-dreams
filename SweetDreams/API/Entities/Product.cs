namespace API.Entities;

public class Product // TODO: Add photo for products using cloudinary.
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public decimal Price { get; set; }

    public double Rating { get; set; }
}