import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoryService } from '../history.service';
import { Transaction } from 'src/app/shared';


@Injectable()
export class HistoryDetailService {

  transactionHistoryTransaction$: Observable<Transaction> = this.historyService.transactionHistorySubject$;

  constructor(private historyService: HistoryService) { }

}
