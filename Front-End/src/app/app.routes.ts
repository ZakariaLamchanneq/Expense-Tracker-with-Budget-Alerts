import { Routes } from '@angular/router';
import { ExpenseComponent } from './components/expense/expense.component';
import { BudgetComponent } from './components/budget/budget.component';

export const routes: Routes = [
    { path: '', redirectTo: 'expenses', pathMatch: 'full' },
    { path: 'expenses', component: ExpenseComponent },
    { path: 'budget', component: BudgetComponent },
  ];
  
