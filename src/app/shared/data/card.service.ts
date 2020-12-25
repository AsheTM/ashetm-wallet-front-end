import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICardService } from './card.service.interface';
import { HttpService } from '../services';
import { WALLET_SERVICES_HTTP } from '../shared.provider';
import {
  SharedModuleConfigServicesHttp,
  SharedModuleConfigServicesHttpControllerApi,
  SharedModuleConfigServicesHttpControllerApiDetail
} from '../shared.type';
import { ICompilePath, IHttpService } from '../interfaces';
import { Card } from '../models';
import {
  CardResponseView,
  AuthenticateCardResponseView,
  HttpPathVariable,
  CardsResponseView,
  CardRequestView,
  AuthenticateCardRequestView
} from '../types';


@Injectable({
  providedIn: 'root'
})
export class CardService implements ICardService, ICompilePath, IHttpService {

  private readonly BACKEND_CONTROLLER_API: SharedModuleConfigServicesHttpControllerApi
    = this.sharedModuleConfigServicesHttp.controller.api;

  constructor(@Inject(WALLET_SERVICES_HTTP) private sharedModuleConfigServicesHttp: SharedModuleConfigServicesHttp,
    private httpService: HttpService) { }

  getCards(idClient: number): Observable<Card[]> {
    return this._makeRequest<CardsResponseView>('showCards', { idClient })
      .pipe(map(({ cards }: CardsResponseView) => cards.map((card: Card) => new Card(card))));
  }

  getCard(idClient: number, idCard: number): Observable<Card> {
    return this._makeRequest<CardResponseView>('showCard', { idClient, idCard })
      .pipe(map(({ card }: CardResponseView) => new Card(card)));
  }

  saveCard(idClient: number, cardRequestView: CardRequestView): Observable<Card> {
    return this._makeRequest<CardResponseView>('addCard', { idClient }, cardRequestView)
      .pipe(map(({ card }: CardResponseView) => new Card(card)));
  }

  authenticate(idClient: number, idCard: number, authenticateRequestView: AuthenticateCardRequestView): Observable<boolean> {
    return this._makeRequest<AuthenticateCardResponseView>('authenticate', { idClient, idCard }, authenticateRequestView)
      .pipe(map(({ authenticate }: AuthenticateCardResponseView) => authenticate));
  }

  _makeRequest<T, U = any>(
    backendControllerApiDetailName: string,
    pathVariables: HttpPathVariable,
    requestBody?: U): Observable<T> {
    const { method, path }: SharedModuleConfigServicesHttpControllerApiDetail
      = this.BACKEND_CONTROLLER_API[backendControllerApiDetailName];
    const methodMethod: string = method.toLowerCase();
    const compiledPath: string = this._compilePath(path, pathVariables);
    return this.httpService[methodMethod](compiledPath, requestBody);
  }

  _compilePath(path: string, { idClient, idCard }: HttpPathVariable): string {
    return path.replace(/\{idClient\}(\/)?/gi, `${ idClient }/`)
      .replace(/\{idCard\}(\/)?/gi, `${ idCard }/`);
  }

}
