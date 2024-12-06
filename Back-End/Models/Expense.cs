using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseTracker.Models
{
   public class Expense
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    public string Title { get; set; }
    
    [Required]
    public decimal Amount { get; set; }
    
    [Required]
    public DateTime Date { get; set; }
    
    [Required]
    [ForeignKey("Category")]
    public int CategoryId { get; set; }
    
    public Category? Category { get; set; }
}

}
