import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() imagePath: string = '';
  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.id);
  }
}
