using AMS.Domain.Entities;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interfaces.Repositories
{
    public interface IMemberRepository : IGenericRepository<Member>
    {
        Task<bool> IsIdentityNumberUniqueAsync(string identityNumber);
        
        Task<bool> IsEmailUniqueAsync(string email);
    }
}