import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputNumberModule} from "primeng/inputnumber";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputNumberModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
