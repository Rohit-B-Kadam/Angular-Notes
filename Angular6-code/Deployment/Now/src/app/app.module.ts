import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

// This import is required for ngModel
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     // Add explicite import for this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
