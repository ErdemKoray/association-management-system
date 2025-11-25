using AMS.Domain.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interface.Repositorie
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<List<T>> GetAllAsync();
        
        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}