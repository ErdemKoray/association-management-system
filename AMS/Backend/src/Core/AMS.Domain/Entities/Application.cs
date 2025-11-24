using AMS.Domain.Common;

namespace AMS.Domain.Entities
{
    public class Application : BaseEntity
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Reason { get; set; } 
        
        public string Status { get; set; } = "Pending"; 
        
        public DateTime ApplicationDate { get; set; }
    }
}