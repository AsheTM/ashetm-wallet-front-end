import { Injectable, Inject } from '@angular/core';
import { isNumber } from 'util';

import { WALLET_SERVICES_SESSION } from '../shared.provider';
import { SharedModuleConfigServicesSession, SharedModuleConfigServicesSessionStorageDetail } from '../shared.type';

import { Session } from '../types';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly SESSION_STORAGE: SharedModuleConfigServicesSessionStorageDetail
    = this.sharedModuleConfiguServicesSession.storage.session;

  constructor(@Inject(WALLET_SERVICES_SESSION)
    private sharedModuleConfiguServicesSession: SharedModuleConfigServicesSession) { }

  getSession(): Session {
    return JSON.parse(window.sessionStorage.getItem(this.SESSION_STORAGE.name)) as Session;
  }

  isSessionOn(): boolean {
    const sessionToken: Session = this.getSession();
    const check: boolean = sessionToken &&
      isNumber(sessionToken.idClient) &&
      isNumber(sessionToken.idCard);

    return check;
  }

  deleteToken(): void {
    window.sessionStorage.removeItem(this.SESSION_STORAGE.name);
  }

  saveSession(session: Session): void {
    const sessionStringified: string = JSON.stringify(session);

    window.sessionStorage.setItem(this.SESSION_STORAGE.name, sessionStringified);
  }

}
