namespace API.Entities;

public class Photo
{
    public int Id { get; set; }

    public string Url { get; set; }

    public bool IsMain { get; set; }

    public string PublicId { get; set; }
    
    public int ProductId { get; set; }

    public Product Product { get; set; }
}