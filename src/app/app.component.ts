import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskName = '';
  taskNumber= '';

  tasks: Task[] = [];

  createTask() {
    const task: Task = {
      number: this.taskNumber,
      name: this.taskName,

    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskNumber='';
  }


}
