using AMS.Domain.Entity;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interface.Repository
{
    public interface IMemberRepository : IGenericRepository<Member>
    {
        Task<bool> IsIdentityNumberUniqueAsync(string identityNumber);
        
        Task<bool> IsEmailUniqueAsync(string email);
    }
}