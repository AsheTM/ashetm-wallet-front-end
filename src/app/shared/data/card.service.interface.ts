import { Observable } from 'rxjs';

import { Card, Transaction } from '../models';


export interface ICardService {
  getCards(idClient: number): Observable<Card[]>;
  getCard(idCliet: number, idCard: number): Observable<Card>;
  saveCard(idClient: number, card: Card): Observable<Card>;
  authenticate(idClient: number, idCard: number, { password }: Card): Observable<boolean>;
  withdraw(idClient: number, idCard: number, transaction: Transaction): Observable<Card>;
  deposit(idClient: number, idCard: number, transaction: Transaction): Observable<Card>;
  activateCard(idClient: number, idCard: number): Observable<boolean>;
  deactivateCard(idClient: number, idCard: number): Observable<boolean>;
}
