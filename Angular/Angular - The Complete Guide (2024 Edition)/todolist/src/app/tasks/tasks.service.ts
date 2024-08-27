import { Injectable } from '@angular/core';
import { dummyTasks } from '../../assets/tasks/dummy-task';
import { NewTaskData } from '../new-task/new-task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(x => x.userId == userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(x => x.id != taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
