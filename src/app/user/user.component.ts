import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  imagePath(user: any) {
    return 'assets/users/' + user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
