import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet.component';
import { HistoryComponent } from './history';
import { BalanceComponent } from './balance';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    children: [
      {
        path: 'history',
        component: HistoryComponent
      }, {
        path: 'balance',
        component: BalanceComponent
      }, {
        path: 'transaction',
        component: TransactionComponent
      }, {
        path: '**',
        redirectTo: 'balance'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
