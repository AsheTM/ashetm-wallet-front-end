import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Card, Client } from 'src/app/shared';


@Injectable()
export class BalanceService {

  private parentResolvers: Observable<any> = this.activatedRoute.parent.data;
  selectedClientBalance$: Observable<Client>  = this.parentResolvers.pipe(map(({ client }) => client));
  selectedCardBalance$:   Observable<Card>    = this.parentResolvers.pipe(map(({ card }) => card));

  constructor(private activatedRoute: ActivatedRoute) { }
}
