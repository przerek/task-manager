import {Component} from '@angular/core';
import {Task} from './models/task';
import {Person} from "./models/person";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskName = '';
  taskNumber = '';
  tasks: Task[] = [];


  people: Person[] = [
    {shortName: 'PIW', hours: 80, isDev: false},
    {shortName: 'DMA', hours: 80, isDev: false},
    {shortName: 'YAT', hours: 80, isDev: false},
    {shortName: 'MAT', hours: 80, isDev: true},
    {shortName: 'MAP', hours: 80, isDev: true},
    {shortName: 'PZL', hours: 80, isDev: true},
    {shortName: 'MBL', hours: 80, isDev: true},
    {shortName: 'RLI', hours: 80, isDev: true},
    {shortName: 'EWA', hours: 80, isDev: true},
    {shortName: 'KAN', hours: 80, isDev: true},
    {shortName: 'DAD', hours: 80, isDev: true},
    {shortName: 'PSU', hours: 70, isDev: true},
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


  isDev(person: Person) {
    var per = this.people.find(p => p.shortName == person.shortName);
    return per?.isDev;
  }

  addPersonToTask(person: Person, hours: number, task: Task) {
    const personToInsert: Person = {
      shortName: person.shortName,
      hours: hours,
      isDev: this.isDev(person)!
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

}
