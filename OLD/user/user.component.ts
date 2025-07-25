import { Component,computed,signal } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[1]);
  imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar);

  // get imagePath() {
  //   // return 'assets/users/'+ this.selectedUser.avatar;
  //   return 'assets/users/'+ this.selectedUser().avatar;
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
