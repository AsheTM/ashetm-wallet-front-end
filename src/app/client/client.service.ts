import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Client,
  ClientService as SharedClientService,
  RedirectService,
  Card
} from '../shared';


@Injectable()
export class ClientService {

  clientsClient$: Observable<Client[]> = this.clientService.getClients();

  constructor(private clientService: SharedClientService,
    private redirectService: RedirectService) { }

  getCardOfClient(client: Client, card: Card): void {
    this.redirectService.redirectToWalletAuthentication(client.id, card.id);
  }

}
