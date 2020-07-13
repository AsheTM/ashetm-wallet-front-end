import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedModule } from '../shared.module';
import { WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_PREFIX, WALLET_SERVICES_HTTP_BACKEND_URL } from '../shared.provider';


@Injectable({
  providedIn: SharedModule
})
export class HttpService<T = any> {

  private readonly BACKEND_API_URL: string = this.walletBackendUrl + this.walletBackendControllerPrefix;

  constructor(@Inject(WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_PREFIX) private walletBackendControllerPrefix: string,
    @Inject(WALLET_SERVICES_HTTP_BACKEND_URL) private walletBackendUrl: string,
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
