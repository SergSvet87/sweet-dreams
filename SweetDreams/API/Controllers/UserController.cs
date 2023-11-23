using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UserController : BaseApiController // Controller for tests.
{
    private readonly DataContext _context;

    public UserController(DataContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Get list of all registered users.
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await _context.Users.ToListAsync();

        return users;
    }
}