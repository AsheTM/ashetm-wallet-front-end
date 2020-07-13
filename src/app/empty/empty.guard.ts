import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService, RedirectService } from '../shared';


@Injectable()
export class EmptyGuard implements CanActivate {

  constructor(private sessionService: SessionService,
    private redirectService: RedirectService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn: boolean = this.sessionService.isSessionOn();
    if(isLoggedIn)
      this.redirectService.redirectToWalletBalance();
    return !isLoggedIn;
  }

}
