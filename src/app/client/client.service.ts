import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ClientService as SharedClientService,
  Client,
  RedirectService,
  SessionService
} from '../shared';


@Injectable()
export class ClientService {

  clientsClient$: Observable<Client[]> = this.clientService.getClients();

  constructor(private clientService: SharedClientService,
    private redirectService: RedirectService,
    private sessionService: SessionService) { }

  choiceClient({ id }: Client): void {
    this.sessionService.saveSession(id);
    this.redirectService.redirectToWalletBalance();
  }

}
