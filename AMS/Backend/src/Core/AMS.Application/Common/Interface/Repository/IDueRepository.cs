using AMS.Domain.Entity;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interface.Repository
{
    public interface IDueRepository : IGenericRepository<Due>
    {
       Task<IEnumerable<Due>> GetDuesHistoryByMemberInfoAsync(string memberInfo); //üye no ile gecmis aidat sorgulama
       Task DefineAnnualDuesAsync(int year, decimal amount); // yıllık üyelere aidat borcu tanımlayıp ödenen ödenmeyen kontrolü
    }
}