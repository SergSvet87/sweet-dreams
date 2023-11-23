using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;

    public ProductController(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts() // TODO: implement sorting and paging
    {
        var products = await _unitOfWork.Product.GetAll();
        return Ok(products);
    }
    
    /// <summary>
    /// Get product by Id.
    /// </summary>
    /// <returns></returns>
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _unitOfWork.Product.GetById(id);
        if (product == default)
            return NotFound();

        return product; // TODO: Create DTO for returning the products
    }
    
    // TODO: add update create and delete methods available only for admin
}