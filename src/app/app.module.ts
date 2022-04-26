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
import {MenuModule} from "primeng/menu";



@NgModule({
  declarations: [
    AppComponent,
    SprintsComponent,
    TaskComponent
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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
