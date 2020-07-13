import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNull } from 'util';

import { TransactionComponent } from './transaction.component';


@Injectable()
export class TransactionGuard implements CanDeactivate<TransactionComponent> {

  canDeactivate(
    component: TransactionComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.amount$
      .pipe(map((amount: number) => isNull(amount) || confirm('You are going to lose your data.\nAre you sure you want to leave?')));
  }

}
