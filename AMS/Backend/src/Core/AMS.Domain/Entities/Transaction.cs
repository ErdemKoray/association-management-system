using AMS.Domain.Common;
using AMS.Domain.Enums;
namespace AMS.Domain.Entities
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