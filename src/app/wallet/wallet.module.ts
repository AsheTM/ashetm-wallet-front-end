import { NgModule } from '@angular/core';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { SharedModule } from '../shared';
import { BalanceComponent } from './balance';
import { HistoryComponent } from './history';
import { TransactionComponent } from './transaction';


@NgModule({
  declarations: [
    WalletComponent,
    BalanceComponent,
    HistoryComponent,
    TransactionComponent
  ],
  imports: [
    SharedModule,

    WalletRoutingModule
  ]
})
export class WalletModule { }
