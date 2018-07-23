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
    public class MakesController : Controller
    {
        private readonly VegaDbContext _context;
        private readonly IMapper _mapper;
        public MakesController(VegaDbContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;

        }

        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes = await _context.Makes.Include(p => p.Models).ToListAsync();
            return _mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}