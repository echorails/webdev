import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;

  share() {
    const message = `Смотри, какой товар: ${this.product.name}\n\n${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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