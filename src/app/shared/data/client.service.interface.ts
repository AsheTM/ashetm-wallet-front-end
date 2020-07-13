import { Observable } from 'rxjs';

import { Client } from '../models';


export interface IClientService {
  getClient(idClient: number): Observable<Client>
  getClients(): Observable<Client[]>;
  addClient(client: Client): Observable<Client>;
}
