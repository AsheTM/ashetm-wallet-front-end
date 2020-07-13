import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICardService } from './card.service.interface';
import { HttpService } from '../services';
import { WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_API } from '../shared.provider';
import { SharedModuleConfigServicesHttpControllerApi, SharedModuleConfigServicesHttpControllerApiDetail } from '../shared.type';
import { Card, Transaction } from '../models';
import { ActivateCardResponseView, CardResponseView, AuthenticateCardResponseView, HttpPathVariable, CardsResponseView } from '../types';
import { ICompilePath, IHttpService } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class CardService implements ICardService, ICompilePath, IHttpService {

  private readonly BACKEND_CONTROLLER_API: SharedModuleConfigServicesHttpControllerApi = this.walletBackendControllerApi;

  constructor(
    @Inject(WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_API) private walletBackendControllerApi: SharedModuleConfigServicesHttpControllerApi,
    private httpService: HttpService) { }

  getCards(idClient: number): Observable<Card[]> {
    return this._makeRequest<CardsResponseView>('showCards', { idClient })
      .pipe(
        map(({ cards }: CardsResponseView) => cards.map((card: Card) => new Card(card)))
      );
  }

  getCard(idClient: number, idCard: number): Observable<Card> {
    return this._makeRequest<CardResponseView>('showCard', { idClient, idCard })
      .pipe(
        map(({ card }: CardResponseView) => new Card(card))
      );
  }

  saveCard(idClient: number, card: Card): Observable<Card> {
    return this._makeRequest<CardResponseView>('addCard', { idClient }, card)
      .pipe(
        map(({ card }: CardResponseView) => new Card(card))
      );
  }

  authenticate(idClient: number, idCard: number, { password }: Card): Observable<boolean> {
    return this._makeRequest<AuthenticateCardResponseView>('authenticate', { idClient, idCard }, password)
      .pipe(
        map(({ authenticate }: AuthenticateCardResponseView) => authenticate)
      );
  }

  withdraw(idClient: number, idCard: number, transaction: Transaction): Observable<Card> {
    return this._makeRequest<CardResponseView>('withdraw', { idClient, idCard }, transaction)
      .pipe(
        map(({ card }: CardResponseView) => new Card(card))
      );
  }

  deposit(idClient: number, idCard: number, transaction: Transaction): Observable<Card> {
    return this._makeRequest<CardResponseView>('deposit', { idClient, idCard }, transaction)
      .pipe(
        map(({ card }: CardResponseView) => new Card(card))
      );
  }

  activateCard(idClient: number, idCard: number): Observable<boolean> {
    return this._makeRequest<ActivateCardResponseView>('activate', { idClient, idCard })
      .pipe(
        map(({ activate }: ActivateCardResponseView) => activate)
      );
  }

  deactivateCard(idClient: number, idCard: number): Observable<boolean> {
    return this._makeRequest<ActivateCardResponseView>('deactivate', { idClient, idCard })
      .pipe(
        map(({ activate }: ActivateCardResponseView) => activate)
      );
  }

  _makeRequest<T, U = any>(
    backendControllerApiDetailName: string,
    pathVariables: HttpPathVariable,
    requestBody?: U): Observable<T> {
    let { method, path }: SharedModuleConfigServicesHttpControllerApiDetail = this.BACKEND_CONTROLLER_API[backendControllerApiDetailName];
    let methodMethod: string = method.toLowerCase();
    let compiledPath: string = this._compilePath(path, pathVariables);
    return this.httpService[methodMethod](compiledPath, requestBody);
  }

  _compilePath(path: string, { idClient, idCard }: HttpPathVariable): string {
    return path.replace(/\{idClient\}(\/)?/gi, `${ idClient }/`)
      .replace(/\{idCard\}(\/)?/gi, `${ idCard }/`);
  }

}
