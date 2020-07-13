import { Injectable, Inject } from '@angular/core';
import { isNumber } from 'util';

import { SharedModuleConfigServicesSessionsStorage, SharedModuleConfigServicesSessionsStorageDetail } from '../shared.type';
import { WALLET_SERVICES_SESSION_STORAGE } from '../shared.provider';
import { SharedModule } from '../shared.module';
import { Session } from '../types';


@Injectable({
  providedIn: SharedModule
})
export class SessionService {

  private readonly SESSION_STORAGE: SharedModuleConfigServicesSessionsStorageDetail = this.sessionStorage.session;

  constructor(@Inject(WALLET_SERVICES_SESSION_STORAGE) private sessionStorage: SharedModuleConfigServicesSessionsStorage) { }

  getSession(): Session {
    return JSON.parse(window.sessionStorage.getItem(this.SESSION_STORAGE.name)) as Session;
  }

  saveSession(session: Session): void {
    let sessionStringified: string = JSON.stringify(session);
    window.sessionStorage.setItem(this.SESSION_STORAGE.name, sessionStringified);
  }

  isSessionOn(): boolean {
    let sessionToken: Session = this.getSession();
    let check: boolean = sessionToken &&
      isNumber(sessionToken.idClient) && isNumber(sessionToken.idCard);
    return check;
  }

  deleteToken(): void {
    window.sessionStorage.removeItem(this.SESSION_STORAGE.name);
  }

}
