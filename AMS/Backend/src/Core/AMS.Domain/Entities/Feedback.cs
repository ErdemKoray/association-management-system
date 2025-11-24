using AMS.Domain.Common;

namespace AMS.Domain.Entities
{
    public class Feedback : BaseEntity
    {
        public int? MemberId { get; set; } 
        public string? SenderName { get; set; } 
        
        
        public string Type { get; set; } = null!;
        
        public string Subject { get; set; } = null!;
        public string Content { get; set; } = null!;
        
        public string Status { get; set; } = "New"; 

        public virtual Member? Member { get; set; }
    }
}