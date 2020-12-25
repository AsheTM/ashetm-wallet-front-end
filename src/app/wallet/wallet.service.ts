import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { toArray } from 'rxjs/operators';

import { HeaderItem } from './wallet.type';


@Injectable()
export class WalletService {

  headerListWallet$: Observable<HeaderItem[]> = from([
    {
      label: 'Balance',
      url: ['/wallet', 'balance']
    }, {
      label: 'History',
      url: ['/wallet', 'history']
    }, {
      label: 'Transaction',
      url: ['/wallet', 'transaction']
    }
  ]).pipe(toArray());

}
