import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Transaction, SessionService, Session, TransactionService, RedirectService } from '../shared';


@Injectable()
export class HistoryService {

  private transactionHistorySubject: ReplaySubject<number> = new ReplaySubject<number>();
  transactionHistorySubject$: Observable<Transaction> = this.transactionHistorySubject.asObservable()
    .pipe(switchMap((idTransaction: number) => this.retreiveTransaction(idTransaction)));

  transactionsHistory$: Observable<Transaction[]> = this.activatedRoute.data
    .pipe(map(({ transactions }) => transactions));

  constructor(private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService,
    private sessionService: SessionService) { }

  getTransaction({ id }: Transaction): void {
    this.transactionHistorySubject.next(id);
  }

  private retreiveTransaction(idTransaction: number): Observable<Transaction> {
    let { idClient, idCard }: Session = this.sessionService.getSession();
    return this.transactionService.showTransaction(idClient, idCard, idTransaction);
  }

}
