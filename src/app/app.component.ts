import { Component } from '@angular/core';
import { Task } from './models/task';
import {Person} from "./models/person";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  taskName = '';
  taskNumber= '';
  hours = 8;
  tasks: Task[] = [];
  selectedPerson!: Person;

  people: Person[] =[
    {shortName: 'PIW', hours: 80, isDev: true},
    {shortName: 'DMA', hours: 80, isDev: true},
    {shortName: 'YAT', hours: 80, isDev: true},
    {shortName: 'MAT', hours: 80, isDev: true},
    {shortName: 'MAP', hours: 80, isDev: true},
    {shortName: 'PZL', hours: 80, isDev: true},
    {shortName: 'MBL', hours: 80, isDev: true},
    {shortName: 'RLI', hours: 80, isDev: true},
    {shortName: 'EWA', hours: 80, isDev: true},
    {shortName: 'DAD', hours: 80, isDev: true},
    {shortName: 'PSU', hours: 70, isDev: true},
  ];


  personInTask: Person[] = [];



  //osoba wraz z calkowitą liczbą godzin dostępnych








  createTask() {
    const task: Task = {
      number: this.taskNumber,
      name: this.taskName,
      people: []
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskNumber='';
  }



  test(value:Person) {
  //  const target = event.target as HTMLElement;
this.selectedPerson = value;
console.log(value);
  }




  addPersonToTask(task: Task) {
    const person: Person = {
      shortName: this.selectedPerson.shortName,
      hours: this.hours,
      isDev: true
    };
    this.tasks.find(value =>{ if(value.number == task.number){task.people.push(person)}})


// console.log(this.personInTask);

  }

}
