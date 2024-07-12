import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() currentUser: any;

  get imagePath() {
    return 'assets/users/' + this.currentUser.avatar;
  }

  onSelectUser() {
    console.log(`clicked ${this.currentUser.name}`);
  }
}
