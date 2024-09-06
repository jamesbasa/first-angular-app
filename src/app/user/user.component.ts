import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};

// interface, as opposed to type, is restricted to defining object types
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

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
