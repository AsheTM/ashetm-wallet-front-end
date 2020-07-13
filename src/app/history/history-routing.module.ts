import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryComponent } from './history.component';
import { HistoryResolver } from './history.resolver';
import { HistoryTransactionComponent } from './history-transaction';
import { HistoryDetailComponent } from './history-detail';


const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    children: [
      {
        path: '',
        component: HistoryTransactionComponent
      }, {
        path: 'detail',
        component: HistoryDetailComponent
      }
    ],
    resolve: {
      transactions: HistoryResolver
    },
    runGuardsAndResolvers: "pathParamsOrQueryParamsChange"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
