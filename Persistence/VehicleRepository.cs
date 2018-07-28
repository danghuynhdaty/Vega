using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Vega.Models;

namespace Vega.Persistence
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id);
    }
    public class VehicleRepository : IVehicleRepository
    {
        private readonly VegaDbContext _dbContext;

        public VehicleRepository(VegaDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public async Task<Vehicle> GetVehicle(int id)
        {
            return await _dbContext.Vehicles
           .Include(v => v.Features)
               .ThenInclude(vf => vf.Feature)
           .Include(v => v.Model)
               .ThenInclude(v => v.Make)
           .SingleOrDefaultAsync(v => v.Id == id);
        }
    }
}