import { Component, Input } from '@angular/core';

@Component({
  template: '' 
})
export class BaseTaskComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() category!: string;
  @Input() status!: string;
  @Input() deadline!: string;
}