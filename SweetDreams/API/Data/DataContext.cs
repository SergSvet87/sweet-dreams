using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DbSet<AppUser> Users { get; set; }
    
    public DbSet<AppAdmin> Admins { get; set; }

    public DbSet<Product> Products { get; set; }

    public DbSet<Photo> Photos { get; set; }

    public DataContext(DbContextOptions options) : base(options)
    {
    }
}