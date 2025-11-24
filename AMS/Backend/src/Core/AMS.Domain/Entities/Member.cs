using AMS.Domain.Common; 

namespace AMS.Domain.Entities
{
    public class Member : BaseEntity
    {
        public string TCNumber { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Phone { get; set; } = null!; 
        public string Email { get; set; } = null!;
        public string Address { get; set; } = null!;
        public DateTime JoinDate { get; set; }
        
       
        public bool IsActive { get; set; } = true; 

    
        public virtual ICollection<Due> Dues { get; set; } = new List<Due>();
        public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
        public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();
    }
}