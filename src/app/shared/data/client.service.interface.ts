import { Observable } from 'rxjs';

import { Client } from '../models';
import { ClientRequestView } from '../types';


export interface IClientService {
  getClient(idClient: number): Observable<Client>
  getClients(): Observable<Client[]>;
  addClient(clientRequestView: ClientRequestView): Observable<Client>;
}
