import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { TRANSACTION_RESOLVER_CLIENTS_BUT_ME } from './transaction.constant';
import { TransactionGuard } from './transaction.guard';
import { TransactionResolver } from './transaction.resolver';


const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    canDeactivate: [TransactionGuard],
    resolve: {
      [TRANSACTION_RESOLVER_CLIENTS_BUT_ME]: TransactionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
