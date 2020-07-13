import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';

import { Client, ClientService, SessionService } from '../shared';
import { switchMap, catchError } from 'rxjs/operators';


@Injectable()
export class WalletClientResolver implements Resolve<Client> {

  constructor(private clientService: ClientService,
    private sessionService: SessionService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Client | Observable<Client> | Promise<Client> {
    let { idClient }: Params = {
      ...route.queryParams,
      ...this.sessionService.getSession()
    };
    return this.clientService.getClient(idClient)
      .pipe(
        switchMap((client: Client) => {
          if(!client)
            return throwError(`${ this.constructor.name }: Client is empty`);
          return of(client);
        }),
        // catchError((err: any) => {
        //   console.warn(err);
        //   return of(this.CLIENT_SAMPLE);
        // })
      )
  }
}
