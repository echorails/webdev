import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductList } from './product-list/product-list';
import { CATEGORIES, PRODUCTS, Product } from './products';
import { Category } from './category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, CommonModule], 
  templateUrl: './app.component.html', 
  styleUrl: './app.css'
})
export class App {
  categories = CATEGORIES;
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.filteredProducts = PRODUCTS.filter(p => p.categoryId === category.id);
  }
}