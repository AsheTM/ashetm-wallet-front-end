import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, combineLatest } from 'rxjs';
import { startWith, pluck, map } from 'rxjs/operators';

import { TRANSACTION_RESOLVER_CLIENTS_BUT_ME } from './transaction.constant';
import { Client, TransactionService as TransactionServiceShared } from '../shared';
import { WALLET_RESOLVER_CLIENT } from '../wallet';


@Injectable()
export class TransactionService {

  private amountTransactionSubject:     Subject<number>             = new Subject<number>();
  amountTransactionSubject$:            Observable<number>          = this.amountTransactionSubject.asObservable()
    .pipe(startWith(null));

  private receiverTransactionSubject:   Subject<Client>             = new Subject<Client>();
  private receiverTransactionSubject$:  Observable<Client>          = this.receiverTransactionSubject.asObservable();

  private meTransaction$:               Observable<Client>          = this.activatedRoute.parent.parent.data
    .pipe(pluck(WALLET_RESOLVER_CLIENT));

  availableAmountTransaction$:          Observable<number>          = this.meTransaction$
    .pipe(pluck('amount'));

  clientsButMeTransaction$:             Observable<Client[]>        = this.activatedRoute.data
    .pipe(pluck(TRANSACTION_RESOLVER_CLIENTS_BUT_ME));

  sendTransaction$:                     Observable<boolean | void>  = combineLatest([
    this.meTransaction$,
    this.availableAmountTransaction$,
    this.amountTransactionSubject$,
    this.receiverTransactionSubject$
  ]).pipe(
    map(([me, availableAmount, amount, receiver]: [Client, number, number, Client]) => {
      // this.transactionServiceShared.makeTransaction(me.id, null, { amount });
    })
  );

  constructor(private activatedRoute: ActivatedRoute,
    private transactionServiceShared: TransactionServiceShared) { }

  getAmount(amount: number): void {
    this.amountTransactionSubject.next(amount);
  }

  getReceiver(receiver: Client): void {
    this.receiverTransactionSubject.next(receiver);
  }

}
