import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatingSystemComponent,
    ProgrammingLanguageComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
