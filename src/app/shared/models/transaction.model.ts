import { IModel } from './.model';
import { Card } from './card.model';


export class Transaction implements IModel {

  id: number;
  amount: number;
  card: Card;
  date: Date;

  constructor(transaction: Transaction) {
    this.id = transaction.id;
    this.amount = transaction.amount;
    this.card = transaction.card;
    this.date = transaction.date;
  }

}
