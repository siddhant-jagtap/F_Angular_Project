import {Component, EventEmitter, Input, Output,} from '@angular/core';
import  {DUMMY_USERS} from "../dummy-users";
import {User} from "./user.model";
import {CardComponent} from "../shared/card/card.component";

const randomIndex =Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


@Input({required:true}) user!: User;
@Input({required:true}) selected!:boolean;

  @Output() select:any = new EventEmitter();

  //    selectedUser = signal(DUMMY_USERS[randomIndex])
  //     ImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)


    get ImagePath(){
      return  'assets/users/' + this.user.avatar;
    }


    onSelectedUser(){
      this.select.emit(this.user.id);
      // const randomIndex =Math.floor(Math.random() * DUMMY_USERS.length);
      // this.selectedUser.set(DUMMY_USERS[randomIndex])




    }
}
