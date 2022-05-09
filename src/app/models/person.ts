export interface Person {
  shortName: string;
  role: Role;
}

export interface Assignee {
  person: Person;
  hours: number;
}

export enum Role {
  DEVELOPER = 'developer',
  TESTER = 'tester',
}

export interface PersonCapacity {
   person: Person;
   hours: number;
}

