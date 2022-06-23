import { Injectable } from '@angular/core';
import {Assignee, Person, PersonCapacity, Role} from "../models/person";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {Task} from "../models/task";
import {Dates, Sprint} from "../models/sprint";
import copy from "fast-copy";
import {cloneDeep} from "lodash";


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




  fetchTasks(sprint: Sprint)
  {
    if (sprint != undefined) {
      const ddd = this.sprints.find(value => value.name == sprint.name);
      return ddd!.tasks;
    } else return null;
  }

  addTask(task: Task, chosenSprint: Sprint)
  {

      this.sprints.find(value =>
        {if(value.name==chosenSprint.name)
        { // @ts-ignore
          value.tasks.push(task)}}
      )

  }


  changePersonAssigneInTask(person: Person, hours: number, task: Task)
  {
      let assignee = task.assignees.find(p => p.person.shortName == person.shortName);
      if ( assignee == null) {
          this.addPersonToTask(person, hours, task);
      } else {
          this.updatePersonHoursInTask(person, hours, task, assignee);
      }
  }

  addPersonToTask(person: Person, hours: number, task: Task){

    //var taskass = JSON.parse(JSON.stringify(task.assignees));




// task = copy(task);
    // const taskass = cloneDeep(task.assignees);

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



  createSprint(dates: Dates[], personCapacities: PersonCapacity[]){

    var datesArray: Date[];
    datesArray = [];
    dates.forEach(value => datesArray.push(value.date));
    this.sprints.push({
      dates, personCapacities, tasks: [], name: datesArray[0]['toLocaleDateString']()+" - "+datesArray[dates.length-1]['toLocaleDateString']()
    })
  }

  constructor() { }

  getSprints() {
    return this.sprints;
  }
}
