using API.Entities;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DbSet<AppUser> Users { get; set; }

    public DbSet<AppAdmin> Admins { get; set; }

    public DbSet<Product> Products { get; set; }

    public DbSet<Photo> Photos { get; set; }

    public DbSet<Cart> Carts { get; set; }

    public DbSet<CartItem> CartItems { get; set; }

    public DbSet<Order> Orders { get; set; }

    public DbSet<OrderItem> OrderItems { get; set; }

    public DataContext(DbContextOptions options) : base(options)
    {
    }
}