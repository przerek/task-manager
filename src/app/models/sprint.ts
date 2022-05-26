import {Person, PersonCapacity} from "./person";
import {Data} from "@angular/router";

export interface Sprint {
  personCapacities: PersonCapacity[];
  tasks: Task[];
  dates: Dates[];
  name: string;
}


export interface Dates
{
  date: Date,
  isWorkDay: boolean
}
