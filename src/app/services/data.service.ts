import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Person, role} from "../models/person";
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

    this.dataBaseService.fetchPersons().subscribe(
      (persons: Person[])=>{
        this.behaviorSubject.next(persons);
      }
    )

    this.dataBaseService.fetchTasks().subscribe(
      (tasks: Task[])=>{
        this.behaviorSubject_tasks.next(tasks);
      }
    )


  }

  addTask(task: Task) {
    this.dataBaseService.addTask(task);
  }
  addPersonToTask(person: Person, hours: number, task: Task) {
    this.dataBaseService.addPersonToTask(person, hours, task);
  }

  deletePersonFromTask(person: Person, task: Task){
    this.dataBaseService.deletePersonFromTask(person, task);
  }

}
