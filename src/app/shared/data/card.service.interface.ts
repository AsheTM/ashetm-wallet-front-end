import { Observable } from 'rxjs';

import { Card } from '../models';
import { CardRequestView, AuthenticateCardRequestView } from '../types';


export interface ICardService {
  getCards(idClient: number): Observable<Card[]>;
  getCard(idCliet: number, idCard: number): Observable<Card>;
  saveCard(idClient: number, cardRequestView: CardRequestView): Observable<Card>;
  authenticate(idClient: number, idCard: number, authenticateRequestView: AuthenticateCardRequestView): Observable<boolean>;
}
