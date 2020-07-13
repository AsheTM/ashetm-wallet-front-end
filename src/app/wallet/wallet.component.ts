import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { walletAnimation } from './wallet.animation';
import { WalletService } from './wallet.service';
import { HeaderItem } from './wallet.type';
import { Router, Event, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector:         'ashetm-wallet',
  templateUrl:      './wallet.component.html',
  styleUrls:        ['./wallet.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [WalletService],
  animations:       [walletAnimation]
})
export class WalletComponent {

  headerList$: Observable<HeaderItem[]> = this.walletService.headerListWallet$;

  isLoadded$: Observable<boolean> = this.router.events
    .pipe(map((event: Event) => !(event instanceof NavigationEnd)));

  constructor(private walletService: WalletService, private router: Router) { }

}
