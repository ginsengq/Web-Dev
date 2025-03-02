import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  imports: [DecimalPipe, NgClass],
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any; 
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onLike() {
    this.like.emit(this.product.id);
  }

  getRatingClass() {
    const rating = this.product.rating;
    if (rating < 1) {
      return 'f0to1';
    } else if (rating >= 1 && rating < 2) {
      return 'f1to2';
    } else if (rating >= 2 && rating < 3) {
      return 'f2to3';
    } else if (rating >= 3 && rating < 4) {
      return 'f3to4';
    } else if (rating >= 4 && rating < 5) {
      return 'f4to5';
    } else if (rating == 5) {
      return 'f5star';
    } else {
      return 'defaultsStar';
    }
  }

  shareProductW() {
    const url = encodeURIComponent(this.product.link); 
    const shareUrl = `https://wa.me/?text=Check+this+out:+${url}`;
    window.open(shareUrl, '_blank');
  }

  shareProductT() {
    const url = encodeURIComponent(this.product.link); 
    const shareUrl = `https://t.me/share/url?url=${url}&text=Check+this+out!`;
    window.open(shareUrl, '_blank');
  }
}