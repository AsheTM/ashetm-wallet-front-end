import { Observable } from 'rxjs';

import { Transaction } from '../models';


export interface  ITransactionService {
  showTransactions(idClient: number, idCard: number): Observable<Transaction[]>;
  showTransaction(idClient: number, idCard: number, idTransaction: number): Observable<Transaction>;
}
