import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet.component';
import { WalletGuard } from './wallet.guard';
import { HistoryComponent } from './history';
import { BalanceComponent } from './balance';
import { TransactionComponent } from './transaction';
import { AuthenticationComponent } from './authentication';


const routes: Routes = [
  {
    path:         '',
    component:    WalletComponent,
    canActivate:  [WalletGuard],
    children: [
      {
        path: '',
        component: AuthenticationComponent
      }, {
        path: 'balance',
        component: BalanceComponent
      }, {
        path: 'history',
        component: HistoryComponent
      }, {
        path: 'transaction',
        component: TransactionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
