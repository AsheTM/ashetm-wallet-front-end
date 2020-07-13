import { NgModule } from '@angular/core';

import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletCardResolver } from './wallet-card.resolver';
import { WalletClientResolver } from './wallet-client.resolver';
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
