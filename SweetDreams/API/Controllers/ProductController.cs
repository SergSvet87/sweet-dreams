using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace API.Controllers;

public class ProductController : BaseApiController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly ISortingAndPagingService<Product> _sortingAndPagingService;

    public ProductController(IUnitOfWork unitOfWork, IMapper mapper,
        ISortingAndPagingService<Product> sortingAndPagingService)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _sortingAndPagingService = sortingAndPagingService;
    }

    /// <summary>
    /// Get all products (with or without sorting and paging).
    /// </summary>
    /// <remarks>
    /// Available sorting parameters: "name", "name_desc", "price", "price_desc", "rating", "rating_desc"
    /// </remarks>>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts(
        [FromQuery] string? sortOrder,
        [FromQuery] int? page,
        [FromQuery] int pageSize = 10)
    {
        var products = await _unitOfWork.Product.GetAll();

        products = _sortingAndPagingService.ApplySorting(products.AsQueryable(), sortOrder);

        var (paginatedProducts, totalItems) = _sortingAndPagingService
            .ApplyPaging(products, page ?? 1, pageSize);

        var productDtos = _mapper.Map<IEnumerable<ProductDto>>(paginatedProducts);

        var paginationInfo = new
        {
            TotalItems = totalItems,
            PageSize = pageSize,
            CurrentPage = page ?? 1,
            TotalPages = (int)Math.Ceiling((double)totalItems / pageSize)
        };

        Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(paginationInfo));

        return Ok(productDtos);
    }

    /// <summary>
    /// Get product by Id.
    /// </summary>
    [HttpGet("GetProductById/{id}")]
    public async Task<ActionResult<ProductDto>> GetProductById(int id)
    {
        var product = await _unitOfWork.Product.GetById(id);
        if (product == default)
            return NotFound();

        var productDto = _mapper.Map<ProductDto>(product);

        return productDto;
    }

    /// <summary>
    /// Create new product (available only for admin).
    /// </summary>
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
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
    /// Update existing product (available only for admin).
    /// </summary>
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
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
    /// Delete product (available only for admin).
    /// </summary>
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
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

    /// <summary>
    /// Get product(s) by name.
    /// </summary>
    [HttpGet("SearchByName/{name}")]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetByName(string name)
    {
        var products = _unitOfWork.Product.Find(x => x.Name.Contains(name));

        var result = _mapper.Map<IEnumerable<ProductDto>>(products);

        return Ok(result);
    }
}