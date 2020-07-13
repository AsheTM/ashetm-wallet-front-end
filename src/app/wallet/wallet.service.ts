import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { toArray,  switchMap } from 'rxjs/operators';

import { HeaderItem } from './wallet.type';


@Injectable()
export class WalletService {

  private parentResolvers: Observable<any> = this.activatedRoute.data;
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

  constructor(private activatedRoute: ActivatedRoute) { }

}
