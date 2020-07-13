import { NgModule } from '@angular/core';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HistoryDatePipe } from './history-date.pipe';
import { HistoryOperationDirective } from './history-operation.directive';
import { SharedModule } from '../shared';
import { HistoryTransactionComponent } from './history-transaction';
import { HistoryDetailComponent } from './history-detail';
import { HistoryResolver } from './history.resolver';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryTransactionComponent,
    HistoryDetailComponent,

    HistoryDatePipe,

    HistoryOperationDirective,
  ],
  imports: [
    SharedModule,

    HistoryRoutingModule
  ],
  providers: [
    HistoryResolver
  ]
})
export class HistoryModule { }
