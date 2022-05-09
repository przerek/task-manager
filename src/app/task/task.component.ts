import { Component, OnInit } from '@angular/core';
import {Task} from "../models/task";
import {Person, role} from "../models/person";
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
    this.tasks$ = this.dataService.get
}

  taskName = '';
  taskNumber = '';


  people: Person[] = [
    {shortName: 'PIW', hours: 80, isDev: role.tester},
    {shortName: 'DMA', hours: 80, isDev: role.tester},
    {shortName: 'YAT', hours: 80, isDev: role.tester},
    {shortName: 'MAT', hours: 80, isDev: role.developer},
    {shortName: 'MAP', hours: 80, isDev: role.developer},
    {shortName: 'PZL', hours: 80, isDev: role.developer},
    {shortName: 'MBL', hours: 80, isDev: role.developer},
    {shortName: 'RLI', hours: 80, isDev: role.developer},
    {shortName: 'EWA', hours: 80, isDev: role.developer},
    {shortName: 'KAN', hours: 80, isDev: role.developer},
    {shortName: 'DAD', hours: 80, isDev: role.developer},
    {shortName: 'PSU', hours: 70, isDev: role.developer},
  ];

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
  role = role;


  addPersonToTask(person: Person, hours: number, task: Task) {
    this.dataService.addPersonToTask(person, hours, task);
  }

  deletePersonFromTask(person: Person, task: Task){
    this.dataService.deletePersonFromTask(person, task);
  }

  getTotal(people: Person[], role: role){
    var sum=0;
    people.filter(value =>{if(value.isDev==role){sum+=value.hours;}})
    return sum;
  }

}
