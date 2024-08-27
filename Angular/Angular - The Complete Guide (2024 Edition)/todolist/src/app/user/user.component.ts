import { Component, computed, EventEmitter, Input, input, OnInit, Output, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [CardComponent]
})
export class UserComponent implements OnInit {
  //#region Signal Fundamental
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // constructor() { }

  // ngOnInit() {
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  //#endregion

  //#region Normal Fundamental
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected: boolean = false;
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  //#endregion

  constructor() { }

  ngOnInit() {
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
