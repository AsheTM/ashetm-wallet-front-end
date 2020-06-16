import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientGuard } from './client.guard';


const routes: Routes = [
  {
    path:         '',
    component:    ClientComponent,
    canActivate:  [ClientGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
