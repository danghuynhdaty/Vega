using Microsoft.AspNetCore.Mvc;

namespace Vega.Controllers
{
    [Route("api/vehicle")]
    public class VehiclesController : Controller
    {
        [HttpPost]
        [Route("create")]
        public IActionResult CreateVehicle(VehiclesController vehicle)
        {
            return Ok(vehicle);
        }
    }
}