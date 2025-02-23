import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() productRemoved = new EventEmitter<number>();
  @Output() productLiked = new EventEmitter<number>();

  removeProduct(productId: number) {
    this.productRemoved.emit(productId);
  }

  onLikeProduct(productId: number) {
    this.productLiked.emit(productId);
  }
}