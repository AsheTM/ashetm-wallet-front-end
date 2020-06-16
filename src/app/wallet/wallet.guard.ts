import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SessionService, RedirectService } from '../shared';


@Injectable({
  providedIn: 'root'
})
export class WalletGuard implements CanActivate {

  constructor(private sessionService: SessionService,
    private redirectService: RedirectService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isSessionOn: boolean = this.sessionService.checkSession();
    return of(isSessionOn).pipe(
      tap((doAllow: boolean) => {
        if(!doAllow)
          this.redirectService.redirectToClient();
      })
    );
  }

}
