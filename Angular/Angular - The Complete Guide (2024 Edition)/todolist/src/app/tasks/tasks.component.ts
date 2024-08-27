import { Component, Input, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from '../../assets/tasks/dummy-task';
import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTaskData } from '../new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit() {
  }
  
  addTask() {
    this.isAddingTask = true;
  }
  
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
