import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskInput } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<TaskInput>();

  title = '';
  summary = '';
  date = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.date,
    });
  }
}
