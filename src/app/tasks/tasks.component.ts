import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from '../task/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf, NgFor, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) selectedUser: any;

  tasks: Task[] = [];
  isAddingTask = false;

  ngOnInit() {
    this.tasks = DUMMY_TASKS;
  }

  get tasksOfSelectedUser() {
    return this.tasks.filter(
      (task: { userId: any }) => task.userId === this.selectedUser.id
    );
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
