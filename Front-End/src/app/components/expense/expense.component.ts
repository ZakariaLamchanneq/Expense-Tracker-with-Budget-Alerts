import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    FormsModule,
    DecimalPipe,
    CurrencyPipe,
    NgIf,
    NgClass
  ],
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: any[] = [];
  categories: any[] = [];
  newExpense = { title: '', amount: 0, date: '', categoryId: null };
  budget = { monthlyBudget: 0, totalExpenses: 0 };
  newCategory = { name: '' };
  isCategoryModalOpen = false;
  showSuccess = false;
  toastMessage = '';
  toastType = 'success';  // success, danger, info

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.getExpenses();
    this.getCategories();
  }

  getExpenses(): void {
    this.expenseService.getExpenses().subscribe(data => this.expenses = data);
  }

  getCategories(): void {
    this.expenseService.getCategories().subscribe(data => this.categories = data);
  }

  addExpense(): void {
    this.expenseService.addExpense(this.newExpense).subscribe(() => {
      this.getExpenses();
      this.newExpense = { title: '', amount: 0, date: '', categoryId: null };
      this.updateBudget();
      this.showSuccessMessage('Dépense ajoutée avec succès!', 'success');
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.getExpenses();
      this.showSuccessMessage('Dépense supprimée avec succès!', 'danger');
    });
  }

  updateBudget(): void {
    this.expenseService.getTotalExpenses().subscribe(total => {
      this.budget.totalExpenses = total;
    });
  }

  openCategoryModal() {
    this.isCategoryModalOpen = true;
  }

  closeCategoryModal() {
    this.isCategoryModalOpen = false;
  }

  showSuccessMessage(message: string, type: 'success' | 'danger' | 'info'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000); // Hide toast after 3 seconds
  }

  addCategory() {
    this.expenseService.addCategory(this.newCategory).subscribe(() => {
      this.getCategories();
      this.closeCategoryModal();
      this.newCategory = { name: '' };
      this.showSuccessMessage('Catégorie ajoutée avec succès!', 'info');
    });
  }
}

