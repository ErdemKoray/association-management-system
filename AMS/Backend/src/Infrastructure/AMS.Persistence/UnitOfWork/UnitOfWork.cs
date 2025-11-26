using System.Threading;
using System.Threading.Tasks;
using AMS.Application.Common.Interface.Repository; 
using AMS.Persistence.Context;

namespace AMS.Persistence.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        private IMemberRepository? _members;
       
        private IDueRepository? _dues; 

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public IMemberRepository Members => _members ??= new MemberRepository(_context);
        
        
        public IDueRepository Dues => _dues ??= new DueRepository(_context); 
        
        public async Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            return await _context.SaveChangesAsync(cancellationToken);
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}