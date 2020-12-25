import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Card, Client } from 'src/app/shared';
import { WALLET_RESOLVER_CLIENT, WALLET_RESOLVER_CARD } from '../wallet';


@Injectable()
export class BalanceService {

  private parentResolvers:  Observable<unknown> = this.activatedRoute.parent.data;
  selectedClientBalance$:   Observable<Client>  = this.parentResolvers.pipe(pluck(WALLET_RESOLVER_CLIENT));
  selectedCardBalance$:     Observable<Card>    = this.parentResolvers.pipe(pluck(WALLET_RESOLVER_CARD));

  constructor(private activatedRoute: ActivatedRoute) { }

}
