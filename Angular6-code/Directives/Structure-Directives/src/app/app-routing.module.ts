import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForIndexComponent } from './ng-for-index/ng-for-index.component';
import { NgForTrackByComponent } from './ng-for-track-by/ng-for-track-by.component';
import { NestedStructureComponent } from './nested-structure/nested-structure.component';


const routes: Routes = [
  {path: 'NgIf' , component: NgIfComponent },
  {path: 'NgSwitch' , component: NgSwitchComponent },
  {path: 'NgFor' , component: NgForComponent },
  {path: 'NgForIndex' , component: NgForIndexComponent},
  {path: 'NgForTrackBy' , component: NgForTrackByComponent},
  {path: 'nestedStructure' , component: NestedStructureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
