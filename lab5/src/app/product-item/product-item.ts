import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<Product>(); 

  share() {
    const message = `Смотри, какой товар: ${this.product.name}\n\n${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  like() {
    this.product.likes++; 
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this product?')) { 
      this.delete.emit(this.product); 
    }
  }

  get ratingStars(): string[] {
    const full = Math.floor(this.product.rating);
    const hasHalf = this.product.rating % 1 >= 0.5;
    const stars = Array(full).fill('★');
    if (hasHalf) stars.push('½');
    while (stars.length < 5) stars.push('☆');
    return stars;
  }
}