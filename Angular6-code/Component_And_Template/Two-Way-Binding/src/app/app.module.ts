import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// This import is required for ngModel
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule       // Add explicite import for this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
