using AMS.Application.Common.Interface.Repository;
using AMS.Domain.Entity;
using AMS.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace AMS.Persistence.Repository
{
    public class DueRepository : GenericRepository<Due>, IDueRepository
    {
        private readonly ApplicationDbContext _context;

        public DueRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
        //Aidat Geçmişi Sorgulama Uygulaması
        public async Task<IEnumerable<Due>> GetDuesHistoryByMemberInfoAsync(string memberInfo)
        {
            
            return await _context.Dues
                .Include(d => d.Member)
                .Where(d => d.Member.IdentityNumber == memberInfo)
                .OrderByDescending(d => d.Year)
                .ToListAsync();
        }

        // 2. Yıllık Otomatik Borç Tanımlama Uygulaması
        public async Task DefineAnnualDuesAsync(int year, decimal amount)
        {
            
            // Tüm aktif üyeleri bul ve her biri için yeni bir Due kaydı oluştur
            var activeMembers = await _context.Members
                .Where(m => m.IsActive)
                .ToListAsync();

            var newDues = activeMembers.Select(member => new Due
            {
                MemberId = member.Id,
                Year = year,
                Amount = amount,
                
            }).ToList();

            await _context.Dues.AddRangeAsync(newDues);
            
        }
    }
}