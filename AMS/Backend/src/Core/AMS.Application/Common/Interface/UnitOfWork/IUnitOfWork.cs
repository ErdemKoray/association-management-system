using System.Threading;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interfaces.Repositories
{
    public interface IUnitOfWork
    {
        IMemberRepository Members { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}