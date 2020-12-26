import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITransactionService } from './transaction.service.interface';
import { HttpService } from '../services';
import { Transaction } from '../models';
import { SHARED_TOKEN_VALUE_HTTP_PROVIDER } from '../shared.provider';
import {
  SharedModuleConfigServicesHttp,
  SharedModuleConfigServicesHttpControllerApi,
  SharedModuleConfigServicesHttpControllerApiDetail
} from '../shared.type';
import { ICompilePath, IHttpService } from '../interfaces';
import { HttpPathVariable, TransactionsResponseView, TransactionResponseView, TransactionRequestView } from '../types';


@Injectable({
  providedIn: 'root'
})
export class TransactionService implements ITransactionService, ICompilePath, IHttpService {

  private readonly BACKEND_CONTROLLER_API: SharedModuleConfigServicesHttpControllerApi
    = this.sharedModuleConfigServicesHttp.controller.api;

  constructor(@Inject(SHARED_TOKEN_VALUE_HTTP_PROVIDER) private sharedModuleConfigServicesHttp: SharedModuleConfigServicesHttp,
    private httpService: HttpService) { }

  showTransactions(idClient: number, idCard: number): Observable<Transaction[]> {
    return this._makeRequest<TransactionsResponseView>('showTransactions', { idClient, idCard })
      .pipe(map(({ transactions }: TransactionsResponseView) => {
        return transactions.map((transaction: Transaction) => new Transaction(transaction));
      }));
  }

  showTransaction(idClient: number, idCard: number, idTransaction: number): Observable<Transaction> {
    return this._makeRequest<TransactionResponseView>('showTransaction', { idClient, idCard, idTransaction })
      .pipe(map(({ transaction }: TransactionResponseView) => new Transaction(transaction)));
  }

  makeTransaction(idClient: number, idCard: number, transactionRequestView: TransactionRequestView): Observable<Transaction> {
    return this._makeRequest<TransactionResponseView>('withdraw', { idClient, idCard }, transactionRequestView)
      .pipe(map(({ transaction }: TransactionResponseView) => new Transaction(transaction)));
  }

  _makeRequest<T, U = any>(
    backendControllerApiDetailName: string,
    pathVariables: HttpPathVariable,
    requestBody?: U): Observable<T> {
    let { method, path }: SharedModuleConfigServicesHttpControllerApiDetail
      = this.BACKEND_CONTROLLER_API[backendControllerApiDetailName];
    let methodMethod: string = method.toLowerCase();
    let compiledPath: string = this._compilePath(path, pathVariables);
    return this.httpService[methodMethod](compiledPath, requestBody);
  }

  _compilePath(path: string, { idClient, idCard, idTransaction }: HttpPathVariable): string {
    return path
      .replace(/\{idClient\}(\/)?/gi, `${ idClient }/`)
      .replace(/\{idCard\}(\/)?/gi, `${ idCard }/`)
      .replace(/\{idTransaction\}(\/)?/gi, `${ idTransaction }/`);
  }


}
