import { NgModule } from '@angular/core';

import { WalletCardResolver } from './wallet-card.resolver';
import { WalletClientResolver } from './wallet-client.resolver';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { WalletGuard } from './wallet.guard';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    SharedModule,

    WalletRoutingModule
  ],
  providers: [
    WalletCardResolver,
    WalletClientResolver,

    WalletGuard
  ],
})
export class WalletModule { }
