import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputNumberModule} from "primeng/inputnumber";
import { SprintsComponent } from './sprints/sprints.component';
import {AppRoutingModule} from "./app-routing.module";
import { TaskComponent } from './task/task.component';
import {MenubarModule} from "primeng/menubar";
import {CalendarModule} from "primeng/calendar";
import {NgxsModule} from '@ngxs/store';
import {environment} from "../environments/environment";
import {AddTaskAction} from "./store/state/state";


@NgModule({
  declarations: [
    AppComponent,
    SprintsComponent,
    TaskComponent,

  ],
    imports: [
        BrowserModule,
        ButtonModule,
        FormsModule,
        DropdownModule,
        BrowserAnimationsModule,
        InputNumberModule,
        AppRoutingModule,
        MenubarModule,
        CalendarModule,NgxsModule.forRoot([AddTaskAction], {developmentMode: !environment.production, })


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
