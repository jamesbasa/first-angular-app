import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { TaskInput } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf, NgFor, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUser: any;

  isAddingTask = false;

  // dependency injection: angular creates and reuses this instance in other components
  // alternative: private tasksService = inject(TasksService)
  constructor(private tasksService: TasksService) {}

  get tasksOfSelectedUser() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }
}
