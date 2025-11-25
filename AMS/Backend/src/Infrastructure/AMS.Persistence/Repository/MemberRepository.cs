using AMS.Application.Common.Interface.Repository;
using AMS.Domain.Entity;
using AMS.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace AMS.Persistence.Repository
{
    public class MemberRepository : GenericRepository<Member>, IMemberRepository
    {
        public MemberRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<bool> IsIdentityNumberUniqueAsync(string identityNumber)
        {
            return !await _dbSet.AnyAsync(m => m.IdentityNumber == identityNumber);
        }

        public async Task<bool> IsEmailUniqueAsync(string email)
        {
            return !await _dbSet.AnyAsync(m => m.Email == email);
        }
    }
}