import { Component, OnInit } from '@angular/core';
import {Task} from "../models/task";
import {Person, role} from "../models/person";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {


  taskName = '';
  taskNumber = '';
  tasks: Task[] = [];


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
      people: []
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskNumber = '';
  }
  role = role;


  addPersonToTask(person: Person, hours: number, task: Task) {
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


  }

  deletePersonFromTask(person: Person, task: Task){
    task.people.forEach((element,index)=>{
      if(element.shortName==person.shortName)
        task.people.splice(index,1);
    })
  }

  getTotal(people: Person[], role: role){
    var sum=0;
    people.filter(value =>{if(value.isDev==role){sum+=value.hours;}})
    return sum;
  }

}
