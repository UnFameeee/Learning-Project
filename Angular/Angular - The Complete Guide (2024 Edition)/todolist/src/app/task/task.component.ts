import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
