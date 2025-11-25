using AMS.Domain.Common;
using AMS.Domain.Enum;
namespace AMS.Domain.Entity
{
    public class Payment : BaseEntity
    {
        public int MemberId { get; set; }
        public int? DueId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }


        public string? ReceiptUrl { get; set; }

        public AMS.Domain.Enum.PaymentType PaymentType { get; set; }


        public bool IsVerified { get; set; } = false;

        public virtual Member Member { get; set; } = null!;
        public virtual Due? Due { get; set; }
    }
}