import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { TransactionGuard } from './transaction.guard';
import { TransactionResolver } from './transaction.resolver';


const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    canDeactivate: [TransactionGuard],
    resolve: {
      clientsButMe: TransactionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
