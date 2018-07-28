using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.Models;
using Vega.Persistence;
using Vega.Resources;

namespace Vega.Controllers
{
    [Route("api/model")]
    public class ModelsController : Controller
    {
        private readonly VegaDbContext _context;
        private readonly IMapper _mapper;

        public ModelsController(VegaDbContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;
        }

        [HttpGet]
        [Route("getall")]
        public async Task<IEnumerable<ModelResource>> models()
        {
            var models = await _context.Models.ToListAsync();

            return _mapper.Map<List<Model>, List<ModelResource>>(models);
        }

        [HttpGet("getbymakeid/{makeId}")]
        public async Task<IActionResult> GetByMakeId(int makeId)
        {
            var models = await _context.Models.Where(p => p.MakeId == makeId).ToListAsync();
            if (models == null)
                return NotFound();
            var result = _mapper.Map<List<Model>, List<ModelResource>>(models);
            return Ok(result);
        }

    }
}