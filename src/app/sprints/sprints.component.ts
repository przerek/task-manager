import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {PersonCapacity} from "../models/person";

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {
  pl: any;
  rangeDates!: Date[];
  freeDays!: Date[];
  personCapacity: PersonCapacity[];

  daysInSprint: { date: Date, isWorkDay: boolean }[] = [ ];

  constructor(private dataService: DataService) {
    this.personCapacity = [];
  }

  ngOnInit(): void {

    this.pl = {
      firstDayOfWeek: 1,
      dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
      dayNamesShort: ['Nie', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'So'],
      dayNamesMin: ['N', 'P', 'W', 'Ś', 'Cz', 'P', 'S'],
      monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
      monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
      today: 'Dziś',
      clear: 'Wyczyść'
    };
  }

  getDatesInSprint() {
    var tempDate = this.rangeDates[0];
    var stopDate = this.rangeDates[1]

    if (tempDate != null && stopDate != null) {
      this.daysInSprint = [];
      while (tempDate <= stopDate) {
        this.daysInSprint.push({date: new Date(tempDate), isWorkDay: true});
        tempDate = new Date(tempDate.getTime() + 86400000);
      }
    }
  }


  getFreeDays() {
    this.daysInSprint.forEach(value => {
      if (value.date.getDay() == 6 || value.date.getDay() == 0) value.isWorkDay = false;
    });

    var temp: Date[];
    temp = [];

    this.daysInSprint.forEach(value => {
      if (!value.isWorkDay) {
        temp.push(value.date)
      }
    });
    return temp;
  }

  createSprint() {
    this.dataService.createSprint(this.daysInSprint, this.personCapacity);
  }

  makeDayAsFree() {
    this.daysInSprint.forEach(value => {
      this.freeDays.forEach(fd => {
        if (value.date.getTime() == fd.getTime()) value.isWorkDay = false
      });
    })

  }
}
