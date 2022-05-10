import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Person} from "../models/person";
import {DataBaseService} from "./data-base.service";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  behaviorSubject = new BehaviorSubject<Person[]>([]);
  behaviorSubject_tasks = new BehaviorSubject<Task[]>([]);


  constructor(private dataBaseService: DataBaseService) {
    this.init();
  }

  private init(): void{
  }

  fetchPersons(){
    return this.dataBaseService.fetchPersons();
  }

  getTasks() {
    return this.dataBaseService.fetchTasks();
  }

  addTask(task: Task) {
    this.dataBaseService.addTask(task);
  }
  changePersonAssigneInTask(person: Person, hours: number, task: Task) {
    this.dataBaseService.changePersonAssigneInTask(person, hours, task);
  }

  deletePersonFromTask(person: Person, task: Task){
    this.dataBaseService.deletePersonFromTask(person, task);
  }

}
