using API.Entities;
using API.Interfaces.IRepositories;

namespace API.Data.Repositories;

public class ProductRepository : GenericRepository<Product>, IProductRepository
{
    public ProductRepository(DataContext context) : base(context)
    {
    }
}