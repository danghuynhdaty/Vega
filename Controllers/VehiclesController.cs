using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Vega.Models;
using Vega.Resources;

namespace Vega.Controllers
{
    [Route("api/vehicle")]
    public class VehiclesController : Controller
    {
        private readonly IMapper _mapper;

        public VehiclesController(IMapper mapper)
        {
            this._mapper = mapper;
        }

        [HttpPost]
        [Route("create")]
        public IActionResult CreateVehicle([FromBody] VehicleResource vehicleResource)
        {
            var vehicle = _mapper.Map<VehicleResource, Vehicle>(vehicleResource);
            return Ok(vehicle);
        }
    }
}