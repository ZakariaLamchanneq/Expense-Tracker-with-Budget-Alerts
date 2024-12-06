using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExpenseTracker.Data;
using ExpenseTracker.Models;

namespace ExpenseTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BudgetController : ControllerBase
    {
        private readonly ExpenseTrackerContext _context;

        public BudgetController(ExpenseTrackerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Budget>> GetBudget()
        {
            return await _context.Budgets.FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Budget>> SetBudget(Budget budget)
        {
            _context.Budgets.Add(budget);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetBudget), budget);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateBudget(Budget budget)
        {
            _context.Budgets.Update(budget);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("total-expenses")]
        public async Task<ActionResult<decimal>> GetTotalExpenses()
        {
            return await _context.Expenses.SumAsync(e => e.Amount);
        }
    }

    
}
