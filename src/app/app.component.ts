import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
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
    TasksComponent,
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

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: any) {
    this.selectedUserId = id;
  }
}
