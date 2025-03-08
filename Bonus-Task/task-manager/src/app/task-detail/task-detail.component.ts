import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseTaskComponent } from '../base-task/base-task.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  standalone: true,
  imports: []
})
export class TaskDetailComponent extends BaseTaskComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    super();
    this.route.params.subscribe(params => {
      this.title = `Task ${params['id']}`;
      this.description = 'Detailed description of the task.';
      this.category = 'Work';
      this.status = 'Pending';
      this.deadline = '2025-12-31';
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}