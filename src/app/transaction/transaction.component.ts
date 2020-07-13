import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { TransactionService } from './transaction.service';
import { Client } from '../shared';
import { Observable } from 'rxjs';


@Component({
  selector:         'ashetm-wallet-transaction',
  templateUrl:      './transaction.component.html',
  styleUrls:        ['./transaction.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [TransactionService]
})
export class TransactionComponent implements OnInit {

  me$:            Observable<Client>    = this.transactionService.meTransaction$;
  clientsButMe$:  Observable<Client[]>  = this.transactionService.clientsButMeTransaction$;

  amount$:        Observable<number>    = this.transactionService.amountTransactionSubject$;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  getAmount(amount: number): void {
    this.transactionService.getAmount(amount);
  }

}
