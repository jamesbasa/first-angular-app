import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'first-angular-app';

  users: any[] = [];

  ngOnInit() {
    this.users = DUMMY_USERS;
  }
}
