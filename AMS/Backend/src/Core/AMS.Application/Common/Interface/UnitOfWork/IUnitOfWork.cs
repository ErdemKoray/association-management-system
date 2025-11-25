using System.Threading;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interface.Repository
{
    public interface IUnitOfWork
    {
        IMemberRepository Members { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}