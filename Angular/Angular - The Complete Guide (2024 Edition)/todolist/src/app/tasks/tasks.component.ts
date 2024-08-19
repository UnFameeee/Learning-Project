import { Component, Input, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) name!: string;

  constructor() { }

  ngOnInit() {
  }
}
