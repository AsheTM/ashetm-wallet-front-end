import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Transaction, TransactionService, SessionService, Session } from '../shared';


@Injectable()
export class HistoryResolver implements Resolve<Transaction[]> {

  constructor(private transactionService: TransactionService,
    private sessionService: SessionService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Transaction[] | Observable<Transaction[]> | Promise<Transaction[]> {
    let { idClient, idCard }: Session = this.sessionService.getSession();
    return this.transactionService.showTransactions(idClient, idCard);
  }

}
