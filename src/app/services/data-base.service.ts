import { Injectable } from '@angular/core';
import {Person, role} from "../models/person";
import {Observable, of} from "rxjs";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private people: Person[] = [
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

  fetchPersons(): Observable<Person[]>
  {
    return  of(this.people);
  }





  private tasks: Task[] = [ ];


  fetchTasks(): Observable<Task[]>
  {
    return  of(this.tasks);
  }

  addTask(task: Task): Observable<Task[]>
  {
    this.tasks.push(task);
    return of(this.tasks);
  }


  addPersonToTask(person: Person, hours: number, task: Task)
  {

    const personToInsert: Person = {
      shortName: person.shortName,
      hours: hours,
      isDev: person.isDev
    };


    this.tasks.find(value => {
      if (value.number == task.number) {
        if (task.people.length == 0) {

          task.people.push(personToInsert);
        } else {
          var per = task.people.find(p => p.shortName == person.shortName);

          if (per == null)
            task.people.push(personToInsert);
          else {
            var pp = task.people.find(p => p.shortName == per?.shortName);
            pp!.hours = hours;
          }

        }


      }

    })

    return of(this.tasks);
  }

  deletePersonFromTask(person: Person, task: Task){
    task.people.forEach((element,index)=>{
      if(element.shortName==person.shortName)
        task.people.splice(index,1);
    })
  }

  constructor() { }
}
