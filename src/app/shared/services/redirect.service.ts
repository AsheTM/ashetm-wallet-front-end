import { Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';

import { SharedModule } from '../shared.module';


@Injectable({
  providedIn: SharedModule
})
export class RedirectService {

  constructor(private router: Router) { }

  redirectTo(outletName: string, path: string[], queryParams?: Params): void {
    this.router.navigate([{ outlets: { [outletName]: path } }], { queryParams });
  }

  redirectToEmpty() {
    this.redirectTo('primary', ['']);
  }

  redirectToWalletAuthentication(idClient: number | string, idCard: number | string): void {
    this.redirectTo('primary', ['wallet', 'authentication'], { idClient, idCard });
  }

  redirectToWalletBalance(): void {
    this.redirectTo('primary', ['wallet', 'balance']);
  }

  redirectToWalletHistory(): void {
    this.redirectTo('primary', ['wallet', 'history']);
  }

  redirectToWalletHistoryDetail(): void {
    this.redirectTo('primary', ['wallet', 'history', 'detail']);
  }

  redirectToWalletTransaction(): void {
    this.redirectTo('primary', ['wallet', 'transaction']);
  }

}
