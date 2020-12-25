import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { TransactionService } from './transaction.service';
import { Client } from '../shared';


@Component({
  selector:         'ashetm-wallet-transaction',
  templateUrl:      './transaction.component.html',
  styleUrls:        ['./transaction.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [TransactionService]
})
export class TransactionComponent {

  availableAmount$: Observable<number>    = this.transactionService.availableAmountTransaction$;

  clientsButMe$:    Observable<Client[]>  = this.transactionService.clientsButMeTransaction$;

  constructor(public transactionService: TransactionService) { }

  getAmount(amount: number): void {
    this.transactionService.getAmount(amount);
  }

  getReceiver(receiver: Client): void {
    this.transactionService.getReceiver(receiver);
  }

}
