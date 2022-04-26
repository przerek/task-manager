import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "./app.module";
import {SprintsComponent} from "./sprints/sprints.component";
import {TaskComponent} from "./task/task.component";

const routes: Routes = [
  {path: 'sprints', component: SprintsComponent},
  {path: 'task', component: TaskComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule{}
