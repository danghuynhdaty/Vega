using Microsoft.EntityFrameworkCore;

namespace Vega.Persistence
{
    public class VegaDbContext : DbContext
    {
        protected VegaDbContext(DbContextOptions<VegaDbContext> options)
            :base(options)
        {
            
        }
    }
}