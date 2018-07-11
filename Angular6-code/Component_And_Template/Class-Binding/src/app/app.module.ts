import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousClassComponent } from './marvellous-class/marvellous-class.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
