import { Component, Input, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from '../../assets/tasks/dummy-task';
import { NewTaskComponent } from "../new-task/new-task.component";

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
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter(x => x.userId == this.id);
  }

  constructor() { }

  ngOnInit() {
  }

  onCompleteTask(taskId: string){
    this.tasks = this.tasks.filter(x => x.id != taskId);
  }

  addTask() {
    this.isAddingTask = true;
  }

  cancelAddTask() {
    this.isAddingTask = false;
  }
}
