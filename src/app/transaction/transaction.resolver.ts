import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { filter, mergeMap, toArray } from 'rxjs/operators';

import { Client, ClientService } from '../shared';
import { WALLET_RESOLVER_CLIENT } from '../wallet';


@Injectable()
export class TransactionResolver implements Resolve<Client[]> {

  constructor(private clientService: ClientService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Client[] | Observable<Client[]> | Promise<Client[]> {
    let me: Client = route.parent.parent.data[WALLET_RESOLVER_CLIENT];
    return this.clientService.getClients()
      .pipe(
        mergeMap(from),
        filter((client: Client) => client.id !== me.id),
        toArray()
      );
  }

}
