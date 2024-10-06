import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf, NgFor, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) selectedUser: any;

  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = DUMMY_TASKS;
  }

  get tasksOfSelectedUser() {
    return this.tasks.filter(
      (task: { userId: any }) => task.userId === this.selectedUser.id
    );
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
