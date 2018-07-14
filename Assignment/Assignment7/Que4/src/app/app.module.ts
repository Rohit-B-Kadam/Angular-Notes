import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { BookService} from './book.service';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [ BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
