import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IClientService } from './client.service.interface';
import { SHARED_TOKEN_VALUE_HTTP_PROVIDER } from '../shared.provider';
import { ICompilePath, IHttpService } from '../interfaces';
import { Client } from '../models';
import { HttpService } from '../services';
import {
  SharedModuleConfigServicesHttp,
  SharedModuleConfigServicesHttpControllerApi,
  SharedModuleConfigServicesHttpControllerApiDetail
} from '../shared.type';
import { ClientResponseView, ClientsResponseView, HttpPathVariable } from '../types';


@Injectable({
  providedIn: 'root'
})
export class ClientService implements IClientService, ICompilePath, IHttpService {

  private readonly BACKEND_CONTROLLER_API: SharedModuleConfigServicesHttpControllerApi
    = this.sharedModuleConfigServicesHttp.controller.api;

  constructor(@Inject(SHARED_TOKEN_VALUE_HTTP_PROVIDER) private sharedModuleConfigServicesHttp: SharedModuleConfigServicesHttp,
    private httpService: HttpService) { }

  getClient(idClient: number): Observable<Client> {
    return this._makeRequest<ClientResponseView>('showClient', { idClient })
      .pipe(map(({ client }: ClientResponseView) => new Client(client)));
  }

  getClients(): Observable<Client[]> {
    return this._makeRequest<ClientsResponseView>('showClients', {})
      .pipe(map(({ clients }: ClientsResponseView) => clients.map(((client: Client) => new Client(client)))));
  }

  addClient(client: Client): Observable<Client> {
    return this._makeRequest<ClientResponseView>('addClient', {}, client)
      .pipe(map(({ client }: ClientResponseView) => new Client(client)));
  }

  _makeRequest<T, U = any>(
    backendControllerApiDetailName: string,
    pathVariables: HttpPathVariable,
    requestBody?: U): Observable<T> {
    const { method, path }: SharedModuleConfigServicesHttpControllerApiDetail
      = this.BACKEND_CONTROLLER_API[backendControllerApiDetailName];
    const methodMethod: string = method.toLowerCase();
    const compiledPath: string = this._compilePath(path, pathVariables);
    return this.httpService[methodMethod](compiledPath, requestBody);
  }

  _compilePath(path: string, { idClient }: HttpPathVariable): string {
    return path.replace(/\{idClient\}(\/)?/gi, `${ idClient }/`);
  }

}
