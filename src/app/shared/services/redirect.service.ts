import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  redirectTo(path: string[]): void {
    this.router.navigate(path);
  }

  redirectToClient(): void {
    this.redirectTo(['']);
  }

  redirectToWalletAuthentication(): void {
    this.redirectTo(['wallet']);
  }

  redirectToWalletBalance(): void {
    this.redirectTo(['wallet', 'balance']);
  }

  redirectToWalletHistory(): void {
    this.redirectTo(['wallet', 'history']);
  }

  redirectToWalletTransaction(): void {
    this.redirectTo(['wallet', 'transaction']);
  }

}
