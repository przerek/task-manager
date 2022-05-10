import { Component, OnInit } from '@angular/core';
import {Task} from "../models/task";
import {Assignee, Person, Role} from "../models/person";
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

 // people!: Observable<Person[]>;
  // ngOnInit(): void {
  // //  this.people = this.dataService.behaviorSubject.asObservable();
//}


tasks!: Observable<Task[]>;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.tasks = this.dataService.getTasks();
}

  taskName = '';
  taskNumber = '';


  people: Person[] = this.dataService.fetchPersons();

  createTask() {
    const task: Task = {
      number: this.taskNumber,
      name: this.taskName,
      assignees: []
    };
    this.dataService.addTask(task);
    this.taskName = '';
    this.taskNumber = '';
  }
  Role = Role;


  changePersonAssigneInTask(person: Person, hours: number, task: Task) {
    this.dataService.changePersonAssigneInTask(person, hours, task);
  }


  deletePersonFromTask(person: Person, task: Task){
    this.dataService.deletePersonFromTask(person, task);
  }

  getTotal(assignees: Assignee[], role: Role){
    var sum=0;
    assignees.filter(value =>{if(value.person.role==role){sum+=value.hours;}})
    return sum;
  }

}
