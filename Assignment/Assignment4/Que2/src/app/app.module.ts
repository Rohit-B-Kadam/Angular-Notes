import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    // Add the name into import
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
