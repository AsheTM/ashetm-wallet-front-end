import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoryTransactionService } from './history-transaction.service';
import { Transaction } from 'src/app/shared';


@Component({
  selector:         'ashetm-history-transaction',
  templateUrl:      './history-transaction.component.html',
  styleUrls:        ['./history-transaction.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [HistoryTransactionService]
})
export class HistoryTransactionComponent {

  transactions$: Observable<Transaction[]> = this.historyTransactionService.filteredTransactionsHistoryTransaction$;

  constructor(private historyTransactionService: HistoryTransactionService) { }

  getTransaction(transaction: Transaction): void {
    this.historyTransactionService.getTransaction(transaction);
  }

  filterById(id: string) {
    this.historyTransactionService.filterById(+id);
  }

}
