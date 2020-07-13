import { Injectable } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNull } from 'util';

import { HistoryService } from '../history.service';
import { Transaction, RedirectService } from 'src/app/shared';


@Injectable()
export class HistoryTransactionService {

  private filterTransactionHistoryTransactionSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  filterTransactionHistoryTransactionSubject$: Observable<number> = this.filterTransactionHistoryTransactionSubject.asObservable();

  transactionsHistoryTransaction$: Observable<Transaction[]> = this.historyService.transactionsHistory$;

  filteredTransactionsHistoryTransaction$: Observable<Transaction[]> = combineLatest([
    this.filterTransactionHistoryTransactionSubject$,
    this.transactionsHistoryTransaction$
  ]).pipe(
    map(([idTransaction, transactions]: [number, Transaction[]]) => {
      if(isNull(idTransaction))
        return transactions;
      return transactions.filter(({ id }: Transaction) => id === idTransaction);
    })
  );

  constructor(private historyService: HistoryService,
    private redirectService: RedirectService) { }

  getTransaction(transaction: Transaction) {
    this.historyService.getTransaction(transaction);
    this.redirectService.redirectToWalletHistoryDetail();
  }

  filterById(id: number): void {
    this.filterTransactionHistoryTransactionSubject.next(id);
  }

}
