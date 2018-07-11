import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousEventComponent } from './marvellous-event/marvellous-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
