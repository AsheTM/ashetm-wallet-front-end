import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, timer, combineLatest } from 'rxjs';
import { delayWhen, map, switchMap, pluck } from 'rxjs/operators';

import {
  Card,
  SessionService,
  RedirectService,
  Client,
  SharedModuleConfigServicesSessionPassword,
  WALLET_SERVICES_SESSION,
  CardService,
  SharedModuleConfigServicesSession
} from 'src/app/shared';
import { WALLET_RESOLVER_CLIENT, WALLET_RESOLVER_CARD } from '../wallet';


@Injectable()
export class AuthenticationService {

  private readonly PASSWORD_LENGTH:   number = this.sharedModuleConfigServicesSession.password.length;
  private readonly DELAY_CHECK_TIME:  number = this.sharedModuleConfigServicesSession.password.lag;

  private passwordAuthenticationSubject: Subject<string>  = new Subject<string>();
  passwordAuthenticationSubject$: Observable<string>      = this.passwordAuthenticationSubject.asObservable();

  private parentResolvers:        Observable<any>         = this.activatedRoute.parent.data;
  selectedClientAuthentication$:  Observable<Client>      = this.parentResolvers.pipe(pluck(WALLET_RESOLVER_CLIENT));
  selectedCardAuthentication$:    Observable<Card>        = this.parentResolvers.pipe(pluck(WALLET_RESOLVER_CARD));

  loginAuthentication$:           Observable<void>        = combineLatest([
    this.selectedClientAuthentication$,
    this.selectedCardAuthentication$,
    this.passwordAuthenticationSubject$
  ]).pipe(
    delayWhen(([,,password]: [Client, Card, string]) => {
      return timer(this.isPasswordLengthValid(password) ? this.DELAY_CHECK_TIME : 0);
    }),
    switchMap(([client, card, password]: [Client, Card, string]) => {
      let isPasswordLengthValid: boolean = this.isPasswordLengthValid(password);
      if(!isPasswordLengthValid)
        return null;
      return this.cardService.authenticate(client.id, card.id, { password })
        .pipe(
          map((isAuthenticated: boolean) => {
            if(isAuthenticated) {
              this.sessionService.saveSession({ idClient: client.id, idCard: card.id });
              this.redirectService.redirectToWalletBalance();
            } else
              this.getPassword('');
          })
        );
    })
  );

  constructor(private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private sessionService: SessionService,
    private redirectService: RedirectService,
    @Inject(WALLET_SERVICES_SESSION)
      private sharedModuleConfigServicesSession: SharedModuleConfigServicesSession) { }

  getPassword(password: string): void {
    this.passwordAuthenticationSubject.next(password);
  }

  private isPasswordLengthValid(password: string): boolean {
    return !!password && password.length === this.PASSWORD_LENGTH;
  }

}
