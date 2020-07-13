import { NgModule } from '@angular/core';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionGuard } from './transaction.guard';
import { TransactionResolver } from './transaction.resolver';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,

    TransactionRoutingModule
  ],
  providers: [
    TransactionGuard,

    TransactionResolver
  ]
})
export class TransactionModule { }
