import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent } from './empty.component';
import { EmptyGuard } from './empty.guard';


const routes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    canActivate: [EmptyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyRoutingModule { }
