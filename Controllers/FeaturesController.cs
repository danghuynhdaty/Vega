using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.Models;
using Vega.Persistence;
using Vega.Resources;

namespace Vega.Controllers
{
    [Route("api/features")]
    public class FeaturesController : ControllerBase
    {
        private readonly VegaDbContext _dbContext;
        private readonly IMapper _mapper;

        public FeaturesController(VegaDbContext dbContext, IMapper mapper)
        {
            this._dbContext = dbContext;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<FeatureResource>> GetAll()
        {
            var models = await _dbContext.Features.ToListAsync();

            return _mapper.Map<List<Feature>, List<FeatureResource>>(models);
        }
    }
}