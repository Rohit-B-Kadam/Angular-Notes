import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDefinedComponent } from './user-defined/user-defined.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDefinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent  //default AppComponent is mention.
    //,UserDefinedComponent  
    
    /*
       But we can add our own component with AppComponent or Without AppComponent
       But Remember all component mention in this array must be render in index.html
    */ 
  
  ] 
})
export class AppModule { }
