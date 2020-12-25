import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { WALLET_SERVICES_HTTP } from '../shared.provider';
import { SharedModuleConfigServicesHttp } from '../shared.type';


@Injectable({
  providedIn: 'root'
})
export class HttpService<T = any> {

  private readonly BACKEND_API_URL: string = this.sharedModuleConfigServicesHttp.url + this.sharedModuleConfigServicesHttp.controller.prefix;

  constructor(@Inject(WALLET_SERVICES_HTTP) private sharedModuleConfigServicesHttp: SharedModuleConfigServicesHttp,
    private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.BACKEND_API_URL + url);
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.BACKEND_API_URL + url, body);
  }

  patch<T>(url: string, body: any): Observable<T> {
    return this.httpClient.patch<T>(this.BACKEND_API_URL + url, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(this.BACKEND_API_URL + url);
  }

}
