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
  dni: number;

  dateArray: Date[];
  personCapacity: PersonCapacity[];


  constructor(private dataService: DataService) {
    this.dni = 0;
    this.dateArray = [];
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

  countDaysInSprint() {
    var startDate = this.rangeDates[0];
    var stopDate = this.rangeDates[1]

    if (startDate != null && stopDate != null)
      if (this.rangeDates != null)
        this.dni = ((stopDate.getTime() - startDate.getTime()) / 86400000) + 1;
      else this.dni = 0;
  }

  getDatesInSprint() {
    var dateArray = [];
    var tempDate = this.rangeDates[0];
    var stopDate = this.rangeDates[1]

    if (tempDate != null && stopDate != null)
      while (tempDate <= stopDate) {
        dateArray.push(new Date(tempDate));
        tempDate = new Date(tempDate.getTime() + 86400000);
      }
    this.dateArray = dateArray;
  }

  createSprint() {
    this.dataService.createSprint(this.dateArray, this.personCapacity);
  }
}
