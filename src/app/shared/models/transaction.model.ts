import { IModel } from './.model';


export class Transaction implements IModel {

  id: number;
  amount: number;
  date: Date;

  constructor(transaction: Transaction) {
    this.id = transaction.id;
    this.amount = transaction.amount;
    this.date = transaction.date;
  }

}
