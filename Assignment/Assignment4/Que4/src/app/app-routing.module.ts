import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { AppComponent } from './app.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  { path: 'operatingsystem' , component: OperatingSystemComponent},
  { path: 'programminglanguage' , component: ProgrammingLanguageComponent},
  { path: 'database' , component: DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
