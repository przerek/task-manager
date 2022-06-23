import {Task} from "../../models/task";

export class AddTask{
  static readonly type = '[TASK] Add Task';
  constructor(public task: Task) {
  }
}

