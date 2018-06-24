/*
  root module
  There must be atleast one component  and we can add many component
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { MyeventComponent } from './myevent/myevent.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    MyeventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
