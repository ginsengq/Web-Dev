import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [TaskItemComponent, CommonModule]
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', category: 'Work', status: 'Pending', deadline: '2025-03-15' },
    { id: 2, title: 'Task 2', description: 'Description 2', category: 'Personal', status: 'In Progress', deadline: '2025-03-20' }
  ];

  constructor(private router: Router) {}

  onTaskCompleted(index: number) {
    this.tasks[index].status = 'Completed';
  }

  onViewDetails(taskId: number) {
    this.router.navigate(['/task', taskId]);
  }

  onTaskDeleted(index: number) {
    this.tasks.splice(index, 1); // Удаляем задачу из списка
  }
}