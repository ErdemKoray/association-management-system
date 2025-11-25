using AMS.Domain.Common;
using AMS.Domain.Enums;
namespace AMS.Domain.Entities
{
    public class Account : BaseEntity
    {
        public string Username { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public  UserRole Role {get;set;}=UserRole.Admin;
        public DateTime LastLoginDate { get; set; }
    }
}