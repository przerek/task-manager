import {PersonCapacity} from "./person";

export interface Sprint {
  personCapacities: PersonCapacity[];
  tasks: Task[];
}
