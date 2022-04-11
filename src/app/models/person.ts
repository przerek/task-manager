export interface Person {
  shortName: string;
  hours: number;
  isDev: role;
}

export enum role {
  developer = 'developer',
  tester = 'tester',
}
