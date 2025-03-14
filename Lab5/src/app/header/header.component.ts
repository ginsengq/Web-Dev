import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() categories: any[] = []; 
  @Output() categorySelected = new EventEmitter<number>(); 

  selectCategory(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }
}