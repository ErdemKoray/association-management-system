using AMS.Domain.Common;
namespace AMS.Domain.Entity
{
    public class Transaction : BaseEntity
    {
        public string Type { get; set; } = null!; 
        
        public string Category { get; set; } = null!; 
        
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; }
        public string? Description { get; set; }
    }
}