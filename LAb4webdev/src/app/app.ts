import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';   // ← без .component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  template: `<app-product-list></app-product-list>`,
  styleUrl: './app.css'
})
export class App {}