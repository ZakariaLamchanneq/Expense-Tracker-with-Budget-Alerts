import {Category} from './Categorie.model';

export interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
  categoryId: number;
  category?: Category; // Optionnel, inclut les détails de la catégorie si nécessaire
}
