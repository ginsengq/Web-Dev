import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category: { id: number, name: string } = { id: 0, name: '' };
}