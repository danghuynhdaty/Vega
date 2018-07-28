using System.Threading.Tasks;

namespace Vega.Persistence
{
    public interface IUnitOfWork
    {
        Task SaveChanges();
    }


    public class UnitOfWork : IUnitOfWork
    {
        private readonly VegaDbContext _context;

        public UnitOfWork(VegaDbContext context)
        {
            this._context = context;
        }
        public async Task SaveChanges()
        {
            await _context.SaveChangesAsync();
        }
    }
}