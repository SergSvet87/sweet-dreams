using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public ProductController(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    /// <summary>
    /// Get all products.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts() // TODO: implement sorting and paging
    {
        var products = await _unitOfWork.Product.GetAll();

        var productDtos = _mapper.Map<IEnumerable<ProductDto>>(products);

        return Ok(productDtos);
    }
    
    /// <summary>
    /// Get product by Id.
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> GetProduct(int id)
    {
        var product = await _unitOfWork.Product.GetById(id);
        if (product == default)
            return NotFound();

        var productDto = _mapper.Map<ProductDto>(product);

        return productDto;
    }

    /// <summary>
    /// Create new product.
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<ProductDto>> CreateProduct(CreateProductDto createProductDto)
    {
        var product = _mapper.Map<Product>(createProductDto);
        
        _unitOfWork.Product.Add(product);
        await _unitOfWork.SaveChangesAsync();

        var productDto = _mapper.Map<ProductDto>(product);

        return StatusCode(201, productDto);
    }

    /// <summary>
    /// Update existing product.
    /// </summary>
    [HttpPut("{id}")]
    public async Task<ActionResult<ProductDto>> UpdateProduct(int id, UpdateProductDto updateProductDto)
    {
        var existingProduct = await _unitOfWork.Product.GetById(id);
        if (existingProduct == default)
            return NotFound();

        _mapper.Map(updateProductDto, existingProduct);
        
        _unitOfWork.Product.Update(existingProduct);
        await _unitOfWork.SaveChangesAsync();

        var productDto = _mapper.Map<ProductDto>(existingProduct);

        return productDto;
    }

    /// <summary>
    /// Delete product.
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteProduct(int id)
    {
        var existingProduct = await _unitOfWork.Product.GetById(id);
        if (existingProduct == default)
            return NotFound();
        
        _unitOfWork.Product.Delete(existingProduct);
        await _unitOfWork.SaveChangesAsync();

        return NoContent();
    }
    
    // TODO: create, update and delete methods should be available only for admin
}