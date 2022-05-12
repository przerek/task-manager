import { Injectable } from '@angular/core';
import {Assignee, Person, PersonCapacity, Role} from "../models/person";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {Task} from "../models/task";
import {Sprint} from "../models/sprint";
import {Data} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private people: Person[] = [
    {shortName: 'PIW', role: Role.TESTER},
    {shortName: 'DMA', role: Role.TESTER},
    {shortName: 'YAT', role: Role.TESTER},
    {shortName: 'MAT', role: Role.DEVELOPER},
    {shortName: 'MAP', role: Role.DEVELOPER},
    {shortName: 'PZL', role: Role.DEVELOPER},
    {shortName: 'MBL', role: Role.DEVELOPER},
    {shortName: 'RLI', role: Role.DEVELOPER},
    {shortName: 'EWA', role: Role.DEVELOPER},
    {shortName: 'KAN', role: Role.DEVELOPER},
    {shortName: 'DAD', role: Role.DEVELOPER},
    {shortName: 'PSU', role: Role.DEVELOPER},
  ];

  private sprints: Sprint[] = [];

  fetchPersons():Person[]
  {
    return this.people;
  }





  private tasks: Task[] = [ ];
  private tasks$ = new BehaviorSubject(this.tasks);

  fetchTasks(sprint: Sprint): Observable<Task[]>
  {
  //  var ddd= this.sprints.find(value => value.name==sprint.name);
  //  return new BehaviorSubject(ddd.tasks);

  return  this.tasks$;
  }

  addTask(task: Task, chosenSprint: Sprint): Observable<Task[]>
  {

      // this.sprints.find(value =>
      //   {if(value.name==chosenSprint.name)
      //   { // @ts-ignore
      //     value.tasks.push(task)}}
      // )


   this.tasks.push(task);
   return of(this.tasks);
  }


  changePersonAssigneInTask(person: Person, hours: number, task: Task)
  {
      let assignee = task.assignees.find(p => p.person.shortName == person.shortName);
      if ( assignee == null) {
          this.addPersonToTask(person, hours, task);
      } else {
          this.updatePersonHoursInTask(person, hours, task, assignee);
      }

    this.tasks$.next(this.tasks);
  }

  addPersonToTask(person: Person, hours: number, task: Task){
    task.assignees.push({
      person,
      hours
    });
  }
  updatePersonHoursInTask(person: Person, hours: number, task: Task, assignee: Assignee){
    assignee.hours = hours;
  }

  deletePersonFromTask(person: Person, task: Task){
    task.assignees = task.assignees.filter(p => p.person.shortName != person.shortName);
  }



  createSprint(dates: Data[], personCapacities: PersonCapacity[]){
    this.sprints.push({
      dates, personCapacities, tasks: [], name: dates[0]['toLocaleDateString']()+" - "+dates[dates.length-1]['toLocaleDateString']()
    })
  }

  constructor() { }

  getSprints() {
    return this.sprints;
  }
}
