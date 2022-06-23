import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddTask} from '../actions/actions';
import {Task} from "../../models/task";
import {Injectable} from "@angular/core";
import {Role} from "../../models/person";

export interface TaskInterface {
  tasks: Task[];
}

@State<TaskInterface>({
  name: 't',
  defaults: {
    tasks: []
  }
})

@Injectable()
export class AddTaskAction{

  @Action(AddTask)
  AddTask(ctx: StateContext<TaskInterface>, action: AddTask){

    const {task} = action;
    const state = ctx.getState();

    if(!task)
      return;

    ctx.setState({
      ...state,
      tasks: [...state.tasks, task]
      });

    console.log(ctx.getState());
}

  // doSth(){}


}
