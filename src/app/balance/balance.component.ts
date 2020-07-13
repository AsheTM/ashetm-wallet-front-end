import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { BalanceService } from './balance.service';
import { Card, Client } from 'src/app/shared';


@Component({
  selector:         'ashetm-wallet-balance',
  templateUrl:      './balance.component.html',
  styleUrls:        ['./balance.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [BalanceService]
})
export class BalanceComponent implements OnInit {

  selectedClient$:  Observable<Client>  = this.balanceService.selectedClientBalance$;
  selectedCard$:    Observable<Card>    = this.balanceService.selectedCardBalance$;

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
  }

}
