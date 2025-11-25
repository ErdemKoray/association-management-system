using AMS.Domain.Common;
using AMS.Domain.Enum;
namespace AMS.Domain.Entity
{
    public class Feedback : BaseEntity
    {
        public int? MemberId { get; set; }
        public string? SenderName { get; set; }

        public FeedbackType Type { get; set; }

        public string Subject { get; set; } = null!;
        public string Content { get; set; } = null!;

        public string Status { get; set; } = "New";

        public virtual Member? Member { get; set; }
    }
}