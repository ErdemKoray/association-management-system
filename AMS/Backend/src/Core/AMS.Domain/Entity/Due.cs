using AMS.Domain.Common;

namespace AMS.Domain.Entity
{
    public class Due : BaseEntity
    {
        public int MemberId { get; set; }
        public int Year { get; set; } // Örn: 2025
        public decimal Amount { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsPaid { get; set; } = false;

        // İlişki
        public virtual Member Member { get; set; } = null!;
    }
}