import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientService } from './client.service';
import { Client, Card } from '../shared';


@Component({
  selector:         'ashetm-client',
  templateUrl:      './client.component.html',
  styleUrls:        ['./client.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [ClientService]
})
export class ClientComponent {

  clients$: Observable<Client[]>  = this.clientService.clientsClient$;

  constructor(private clientService: ClientService) { }

  onClickEventHandler(client: Client, card: Card): void {
    this.clientService.getCardOfClient(client, card);
  }

}
