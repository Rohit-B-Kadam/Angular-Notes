import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule , MatInputModule, MatSelectModule , MatButtonModule} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
