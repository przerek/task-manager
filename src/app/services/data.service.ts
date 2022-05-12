import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Person, PersonCapacity} from "../models/person";
import {DataBaseService} from "./data-base.service";
import {Task} from "../models/task";
import {Data} from "@angular/router";
import {Sprint} from "../models/sprint";

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

  getTasks(sprint: Sprint) {
    return this.dataBaseService.fetchTasks(sprint);
  }

  addTask(task: Task, chosenSprint: Sprint) {
    this.dataBaseService.addTask(task, chosenSprint);
  }
  changePersonAssigneInTask(person: Person, hours: number, task: Task) {
    this.dataBaseService.changePersonAssigneInTask(person, hours, task);
  }

  deletePersonFromTask(person: Person, task: Task){
    this.dataBaseService.deletePersonFromTask(person, task);
  }

  createSprint(dates: Data[], personCapacity: PersonCapacity[] ){
    this.dataBaseService.createSprint(dates, personCapacity);
  };

  getSprints(){
   return this.dataBaseService.getSprints();
  }

}
