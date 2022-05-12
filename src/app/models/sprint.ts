import {PersonCapacity} from "./person";
import {Data} from "@angular/router";

export interface Sprint {
  personCapacities: PersonCapacity[];
  tasks: Task[];
  dates: Data[];
  name: string;
}
