import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Client } from '../shared';


@Injectable()
export class TransactionService {

  private amountTransactionSubject: Subject<number> = new Subject<number>();
  amountTransactionSubject$:  Observable<number>    = this.amountTransactionSubject.asObservable()
    .pipe(startWith(null));

  meTransaction$:             Observable<Client>    = this.activatedRoute.parent.parent.data
    .pipe(map(({ client }) => <Client>client));
  clientsButMeTransaction$:   Observable<Client[]>  = this.activatedRoute.data
    .pipe(map(({ clientsButMe }) => clientsButMe as Client[]));

  constructor(private activatedRoute: ActivatedRoute) { }

  getAmount(amount: number): void {
    this.amountTransactionSubject.next(amount);
  }

}
