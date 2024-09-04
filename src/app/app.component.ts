import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'first-angular-app';

  users: any[] = [];
  selectedUserId: any;

  ngOnInit() {
    this.users = DUMMY_USERS;
  }

  imagePath(user: any) {
    return 'assets/users/' + user.avatar;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: any) {
    this.selectedUserId = id;
  }
}
