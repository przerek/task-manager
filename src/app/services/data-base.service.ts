import { Injectable } from '@angular/core';
import {Assignee, Person, Role} from "../models/person";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {Task} from "../models/task";
import {Sprint} from "../models/sprint";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private people: Person[] = [
    {shortName: 'PIW', hours: 80, role: Role.TESTER},
    {shortName: 'DMA', hours: 80, role: Role.TESTER},
    {shortName: 'YAT', hours: 80, role: Role.TESTER},
    {shortName: 'MAT', hours: 80, role: Role.DEVELOPER},
    {shortName: 'MAP', hours: 80, role: Role.DEVELOPER},
    {shortName: 'PZL', hours: 80, role: Role.DEVELOPER},
    {shortName: 'MBL', hours: 80, role: Role.DEVELOPER},
    {shortName: 'RLI', hours: 80, role: Role.DEVELOPER},
    {shortName: 'EWA', hours: 80, role: Role.DEVELOPER},
    {shortName: 'KAN', hours: 80, role: Role.DEVELOPER},
    {shortName: 'DAD', hours: 80, role: Role.DEVELOPER},
    {shortName: 'PSU', hours: 70, role: Role.DEVELOPER},
  ];

  private sprints: Sprint[] = [];

  fetchPersons(): Observable<Person[]>
  {
    return  of(this.people);
  }





  private tasks: Task[] = [ ];
  private tasks$ = new BehaviorSubject(this.tasks);

  fetchTasks(): Observable<Task[]>
  {
    return  this.tasks$;
  }

  addTask(task: Task): Observable<Task[]>
  {
    this.tasks.push(task);
    return of(this.tasks);
  }


  addPersonToTask(person: Person, hours: number, task: Task)
  {
      let assignee = task.assignees.find(p => p.person.shortName == person.shortName);
      if ( assignee == null) {
         task.assignees.push({
           person,
           hours
         });
      } else {
        assignee.hours = hours;
      }

    this.tasks$.next(this.tasks);
  }

  deletePersonFromTask(person: Person, task: Task){
    task.assignees = task.assignees.filter(p => p.person.shortName != person.shortName);
  }

  constructor() { }
}
