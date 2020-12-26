import { Observable } from 'rxjs';

import { Transaction } from '../models';
import { TransactionRequestView } from '../types';


export interface  ITransactionService {
  showTransactions(idClient: number, idCard: number): Observable<Transaction[]>;
  showTransaction(idClient: number, idCard: number, idTransaction: number): Observable<Transaction>;
  makeTransaction(idClient: number, idCard: number, transactionRequestView: TransactionRequestView): Observable<Transaction>;
}
