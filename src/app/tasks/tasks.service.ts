import { DUMMY_TASKS } from '../dummy-tasks';
import { Task, TaskInput } from './task/task.model';
import { Injectable } from '@angular/core';

const STORAGE_KEY_TASKS = 'tasks';

// registers as Injectable so it can be used as a dependency
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
    // below uses browser data saved across browser sessions
    const tasks = localStorage.getItem(STORAGE_KEY_TASKS);
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

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
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(this.tasks));
  }
}
