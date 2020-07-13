import { NgModule } from '@angular/core';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    SharedModule,

    BalanceRoutingModule
  ]
})
export class BalanceModule { }
