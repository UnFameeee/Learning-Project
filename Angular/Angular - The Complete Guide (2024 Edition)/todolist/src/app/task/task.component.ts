import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [CardComponent, DatePipe]
})
export class TaskComponent implements OnInit {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  constructor(

  ) { }

  ngOnInit() {
  }

  onCompleteTask() {
    this.tasksService.completeTask(this.task.id);
  }
}
