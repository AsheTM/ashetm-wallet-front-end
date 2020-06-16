import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../shared';
import { ClientService } from './client.service';


@Component({
  selector:         'ashetm-client',
  templateUrl:      './client.component.html',
  styleUrls:        ['./client.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [ClientService]
})
export class ClientComponent {

  clients$: Observable<Client[]> = this.clientService.clientsClient$;

  constructor(private clientService: ClientService) { }

  getClient(client: Client): void {
    this.clientService.choiceClient(client);
  }

}
