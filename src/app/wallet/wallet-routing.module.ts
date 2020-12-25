import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletClientResolver } from './wallet-client.resolver';
import { WalletCardResolver } from './wallet-card.resolver';
import { WalletComponent } from './wallet.component';
import { WalletGuard } from './wallet.guard';
import { WALLET_RESOLVER_CLIENT, WALLET_RESOLVER_CARD } from './wallet.constant';


const routes: Routes = [
  {
    path:             '',
    children:         [
      {
        path: '',
        component: WalletComponent,
        canActivate: [WalletGuard],
        children: [
          {
            path: 'balance',
            loadChildren: () => import('../balance').then(({ BalanceModule }) => BalanceModule)
          }, {
            path: 'history',
            loadChildren: () => import('../history').then(({ HistoryModule }) => HistoryModule)
          }, {
            path: 'transaction',
            loadChildren: () => import('../transaction').then(({ TransactionModule }) => TransactionModule)
          }
        ]
      }, {
        path: 'authentication',
        loadChildren: () => import('../authentication').then(({ AuthenticationModule }) => AuthenticationModule)
      }
    ],
    resolve:          {
      [WALLET_RESOLVER_CARD]:   WalletCardResolver,
      [WALLET_RESOLVER_CLIENT]: WalletClientResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
