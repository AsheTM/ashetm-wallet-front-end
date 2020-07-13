import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { Card } from 'src/app/shared';


@Component({
  selector:         'ashetm-authentication',
  templateUrl:      './authentication.component.html',
  styleUrls:        ['./authentication.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [AuthenticationService]
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  selectedCard$:  Observable<Card>    = this.authenticationService.selectedCardAuthentication$;
  password$:      Observable<string>  = this.authenticationService.passwordAuthenticationSubject$;

  login$:         Observable<void>    = this.authenticationService.loginAuthentication$;
  private loginSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginSubscription = this.login$.subscribe();
  }

  ngOnDestroy(): void {
    if(this.loginSubscription)
      this.loginSubscription.unsubscribe();
  }

  onPasswordEventHandler($event: string): void {
    this.authenticationService.getPassword($event);
  }

}
