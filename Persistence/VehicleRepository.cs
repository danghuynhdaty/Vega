using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Vega.Models;

namespace Vega.Persistence
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
    }

    public class VehicleRepository : IVehicleRepository
    {
        private readonly VegaDbContext _dbContext;

        public VehicleRepository(VegaDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public async Task<Vehicle> GetVehicle(int id, bool includeRelated = true)
        {
            if (includeRelated)
            {
                return await _dbContext.Vehicles.FindAsync(id);
            }

            return await _dbContext.Vehicles
           .Include(v => v.Features)
               .ThenInclude(vf => vf.Feature)
           .Include(v => v.Model)
               .ThenInclude(v => v.Make)
           .SingleOrDefaultAsync(v => v.Id == id);
        }

        public void Add(Vehicle vehicle)
        {
            _dbContext.Add(vehicle);
        }

        public void Remove(Vehicle vehicle)
        {
            _dbContext.Remove(vehicle);
        }
    }
}