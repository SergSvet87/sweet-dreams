using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class
    UserController : BaseApiController // TODO: Need to think if it is necessary. If it is, implement repo, DTOs etc.
{
    private readonly DataContext _context;

    public UserController(DataContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Get list of all registered users.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await _context.Users.ToListAsync();

        return users;
    }

    /// <summary>
    /// Get user by id.
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<AppUser>> GetUserById(int id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

        return user;
    }
}