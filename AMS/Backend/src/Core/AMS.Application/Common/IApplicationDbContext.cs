using Microsoft.EntityFrameworkCore;
using AMS.Domain.Entity;
using System.Threading;
using System.Threading.Tasks;

namespace AMS.Application.Common.Interface
{
    public interface IApplicationDbContext
    {
        DbSet<Member> Members { get; }
        DbSet<AMS.Domain.Entity.Application> Applications { get; }
        DbSet<Due> Dues { get; }
        DbSet<Feedback> Feedbacks { get; }
        DbSet<Payment> Payments { get; }
        DbSet<Transaction> Transactions { get; }
        DbSet<Account> Accounts { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}