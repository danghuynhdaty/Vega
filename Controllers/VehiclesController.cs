using Microsoft.AspNetCore.Mvc;
using Vega.Models;

namespace Vega.Controllers
{
    [Route("api/vehicle")]
    public class VehiclesController : Controller
    {
        [HttpPost]
        [Route("create")]
        public IActionResult CreateVehicle([FromBody] Vehicle vehicle)
        {
            return Ok(vehicle);
        }
    }
}