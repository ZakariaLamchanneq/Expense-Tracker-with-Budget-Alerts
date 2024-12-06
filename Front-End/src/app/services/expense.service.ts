import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = 'http://localhost:5000/api'; // Remplacez par votre URL backend

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/expense`);
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/expense`, expense);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/expense/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/category`);
  }

  getBudget(): Observable<any> {
    return this.http.get(`${this.baseUrl}/budget`);
  }

  setBudget(budget: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/budget`, budget);
  }

  getTotalExpenses(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/budget/total-expenses`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/category`, category);
  }


}

