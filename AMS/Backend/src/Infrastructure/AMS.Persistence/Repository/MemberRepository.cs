using AMS.Application.Common.Interfaces.Repositories;
using AMS.Domain.Entities;
using AMS.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace AMS.Persistence.Repositories
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