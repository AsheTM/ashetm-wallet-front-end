import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, timer, combineLatest } from 'rxjs';
import { delayWhen, map, tap } from 'rxjs/operators';

import {
  Card,
  SessionService,
  RedirectService,
  Client,
  SharedModuleConfigServicesSessionsPassword,
  WALLET_SERVICES_SESSION_PASSWORD
} from 'src/app/shared';


@Injectable()
export class AuthenticationService {

  private readonly PASSWORD_LENGTH:   number = this.sharedModuleConfigServicesSessionsPassword.length;
  private readonly DELAY_CHECK_TIME:  number = 1_000;

  private passwordAuthenticationSubject: Subject<string> = new Subject<string>();
  passwordAuthenticationSubject$: Observable<string>  = this.passwordAuthenticationSubject.asObservable();

  private parentResolvers: Observable<any> = this.activatedRoute.parent.data;
  selectedClientAuthentication$:  Observable<Client>  = this.parentResolvers.pipe(map(({ client }) => client));
  selectedCardAuthentication$:    Observable<Card>    = this.parentResolvers.pipe(map(({ card }) => card));

  loginAuthentication$: Observable<void> = combineLatest([
    this.selectedClientAuthentication$,
    this.selectedCardAuthentication$,
    this.passwordAuthenticationSubject$
  ]).pipe(
    delayWhen(([,,password]: [Client, Card, string]) => timer(this.isPasswordLengthValid(password) ? this.DELAY_CHECK_TIME : 0)),
    map(([client, card, password]: [Client, Card, string]) => {
      let isPasswordLengthValid: boolean = this.isPasswordLengthValid(password);
      let isPasswordMatch: boolean = card.password === password;
      switch(true) {
        case !isPasswordLengthValid:  return;
        case !isPasswordMatch:        this.getPassword(''); break;
        case isPasswordMatch:         this.login(client, card);
      }
    })
  );

  constructor(private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private redirectService: RedirectService,
    @Inject(WALLET_SERVICES_SESSION_PASSWORD)
      private sharedModuleConfigServicesSessionsPassword: SharedModuleConfigServicesSessionsPassword) { }

  getPassword(password: string): void {
    this.passwordAuthenticationSubject.next(password);
  }

  private login({ id: idClient }: Client, { id: idCard }: Card): void {
    this.sessionService.saveSession({ idClient, idCard });
    this.redirectService.redirectToWalletBalance();
  }

  private isPasswordLengthValid(password: string): boolean {
    return !!password && password.length === this.PASSWORD_LENGTH;
  }

}
