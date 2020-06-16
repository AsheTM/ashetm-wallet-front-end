import { Injectable, Inject } from '@angular/core';

import { SharedModuleConfigServicesSessionStorage } from '../shared.type';
import { WALLET_SERVICES_SESSION_STORAGE } from '../shared.provider';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly SESSION_STORAGE_NAME: string = this.sessionStorage.name;

  constructor(@Inject(WALLET_SERVICES_SESSION_STORAGE) private sessionStorage: SharedModuleConfigServicesSessionStorage) { }

  saveSession(id: number | string): void {
    window.sessionStorage.setItem(this.SESSION_STORAGE_NAME, String(id));
  }

  checkSession(): boolean {
    return !!window.sessionStorage.getItem(this.SESSION_STORAGE_NAME);
  }

}
