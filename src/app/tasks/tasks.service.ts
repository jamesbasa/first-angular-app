import { DUMMY_TASKS } from '../dummy-tasks';
import { Task, TaskInput } from './task/task.model';
import { Injectable } from '@angular/core';

// registers as Injectable so it can be used as a dependency
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskInput: TaskInput, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskInput.title,
      summary: taskInput.summary,
      dueDate: taskInput.dueDate,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
