import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PizzastatusComponent } from './pizzastatus/pizzastatus.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzastatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
