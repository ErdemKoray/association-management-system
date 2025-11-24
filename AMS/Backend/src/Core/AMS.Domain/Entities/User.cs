using AMS.Domain.Common;

namespace AMS.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Username { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string Role { get; set; } = "Admin"; 
        public DateTime LastLoginDate { get; set; }
    }
}