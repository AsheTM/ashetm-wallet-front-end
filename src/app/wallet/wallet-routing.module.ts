import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletClientResolver } from './wallet-client.resolver';
import { WalletCardResolver } from './wallet-card.resolver';
import { WalletComponent } from './wallet.component';
import { WalletGuard } from './wallet.guard';


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
      client: WalletClientResolver,
      card:   WalletCardResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
