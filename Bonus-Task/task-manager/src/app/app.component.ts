import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TaskListComponent, RouterModule] 
})
export class AppComponent {}