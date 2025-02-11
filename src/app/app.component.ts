import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular-project';
  selectedUserId? :string;
  users = DUMMY_USERS;

  get selectedUser(){
     return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
  }
}
