using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController : ControllerBase
{
    [HttpGet("test")]
    public ActionResult Test()
    {
        return Ok("Your request was successful");
    }
}