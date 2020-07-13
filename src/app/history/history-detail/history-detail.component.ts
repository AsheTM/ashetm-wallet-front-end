import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoryDetailService } from './history-detail.service';
import { Transaction } from 'src/app/shared';

@Component({
  selector:         'ashetm-history-detail',
  templateUrl:      './history-detail.component.html',
  styleUrls:        ['./history-detail.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [HistoryDetailService]
})
export class HistoryDetailComponent implements OnInit {

  transaction$: Observable<Transaction> = this.historyDetailService.transactionHistoryTransaction$;

  constructor(private historyDetailService: HistoryDetailService) { }

  ngOnInit(): void {
  }

}
