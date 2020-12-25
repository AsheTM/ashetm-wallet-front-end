import { NgModule } from '@angular/core';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { TransactionGuard } from './transaction.guard';
import { TransactionResolver } from './transaction.resolver';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    TransactionComponent
  ],
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
