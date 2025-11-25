using AMS.Domain.Common;
using AMS.Domain.Enum;
namespace AMS.Domain.Entity
{
    public class Account : BaseEntity
    {
        public string Username { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public  UserRole Role {get;set;}
        public DateTime LastLoginDate { get; set; }
    }
}