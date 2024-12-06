using System.ComponentModel.DataAnnotations;

namespace ExpenseTracker.Models
{
    public class Budget
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public decimal MonthlyBudget { get; set; }
        
        public decimal TotalExpenses { get; set; }
    }
}
