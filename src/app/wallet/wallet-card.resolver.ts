import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';

import { Card, CardService, SessionService } from '../shared';
import { switchMap, catchError } from 'rxjs/operators';


@Injectable()
export class WalletCardResolver implements Resolve<Card> {

  constructor(private cardService: CardService,
    private sessionService: SessionService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Card | Observable<Card> | Promise<Card> {
    let { idClient, idCard }: Params = {
      ...route.queryParams,
      ...this.sessionService.getSession()
    };
    return this.cardService.getCard(idClient, idCard)
      .pipe(
        switchMap((card: Card) => {
          if(!card)
            return throwError(`${ this.constructor.name }: Card is empty`);
          return of(card);
        }),
        // catchError
      )
  }

}
