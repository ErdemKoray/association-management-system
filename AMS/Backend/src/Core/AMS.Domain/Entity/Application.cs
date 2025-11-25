using AMS.Domain.Enum;
using AMS.Domain.Common;
namespace AMS.Domain.Entity
{
    public class Application : BaseEntity
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Reason { get; set; }

        public AMS.Domain.Enum.ApplicationStatus Status { get; set; }

        public DateTime ApplicationDate { get; set; }
    }
}