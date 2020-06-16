import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_API } from '../shared.provider';
import { SharedModuleConfigServicesHttpControllerApi } from '../shared.type';
import { ICompilePath, IMappingView } from '../interfaces';
import { IClientMapping, IClientsMapping, isIClientMapping, isIClientsMapping } from '../mappings';
import { HttpService } from '../services';
import { Client } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ClientService implements ICompilePath {

  private readonly BACKEND_CONTROLLER_API: SharedModuleConfigServicesHttpControllerApi = this.walletBackendControllerApi;

  constructor(@Inject(WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_API) private walletBackendControllerApi: SharedModuleConfigServicesHttpControllerApi,
    private httpService: HttpService) { }

  getClient(id: number): Observable<Client> {
    let { method, path } = this.BACKEND_CONTROLLER_API.showClient;
    let methodMethod: string = method.toLowerCase();
    let compiledPath: string = this._compilePath(path, { idClient: id });
    return (<Observable<IClientMapping>>this.httpService[methodMethod](compiledPath))
      .pipe(
        map(({ client }: IClientMapping) => new Client(client))
      );
  }

  getClients(): Observable<Client[]> {
    console.log(this.BACKEND_CONTROLLER_API)
    let { method, path } = this.BACKEND_CONTROLLER_API.showClients;
    let methodMethod: string = method.toLowerCase();
    return (<Observable<IClientsMapping>>this.httpService[methodMethod](path))
      .pipe(
        map(({ clients }: IClientsMapping) => clients)
      );
  }

  addClient(client: Client): Observable<Client> {
    let { method, path } = this.BACKEND_CONTROLLER_API.addClient;
    let methodMethod: string = method.toLowerCase();
    return (<Observable<IClientMapping>>this.httpService[methodMethod](path, client))
      .pipe(
        map(({ client }: IClientMapping) => client)
      );
  }

  _compilePath(path: string, { idClient }: any): string {
    return path.replace(/\{idClient\}/gi, idClient)
  }

}
