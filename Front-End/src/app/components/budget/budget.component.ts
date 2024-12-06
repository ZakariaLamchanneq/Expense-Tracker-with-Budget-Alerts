
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DecimalPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [FormsModule, NgIf, CurrencyPipe, DecimalPipe, NgClass],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budget = { monthlyBudget: 0, totalExpenses: 0 }; // Ensure `budget` is initialized correctly
  progress = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.getBudget();
    this.updateBudget();  // Fetch total expenses on load
  }

  getBudget(): void {
    this.expenseService.getBudget().subscribe(
      data => {
        this.budget = data; // Assign fetched budget to the variable
        this.updateProgress();
      },
      error => {
        console.error('Error fetching budget data', error);
      }
    );
  }

  setBudget(): void {
    this.expenseService.setBudget(this.budget).subscribe(() => {
      this.updateProgress(); // Update progress after setting the budget
    });
  }

  updateBudget(): void {
    this.expenseService.getTotalExpenses().subscribe(total => {
      this.budget.totalExpenses = total; // Update total expenses
      this.checkBudgetStatus(); // Check for budget notifications
      this.updateProgress(); // Update progress bar
    });
  }

  checkBudgetStatus(): void {
    if (this.budget.totalExpenses > this.budget.monthlyBudget) {
      alert("Vous avez dépassé votre budget mensuel!");
    }
  }

  updateProgress(): void {
    if (this.budget.monthlyBudget > 0) {
      this.progress = (this.budget.totalExpenses / this.budget.monthlyBudget) * 100;
    } else {
      this.progress = 0;
    }
  }
}
