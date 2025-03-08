import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  standalone: true,
  imports: []
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskCompleted = new EventEmitter<void>();
  @Output() viewDetails = new EventEmitter<void>();
  @Output() taskDeleted = new EventEmitter<void>();

  markAsCompleted() {
    this.status = 'Completed';
    this.taskCompleted.emit();
  }

  onViewDetails() {
    this.viewDetails.emit();
  }

  onDelete() {
    this.taskDeleted.emit();
  }
}