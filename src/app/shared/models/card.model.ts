import { IModel } from './.model';


export class Card implements IModel {

  id: number;
  balance: number;
  password: string;
  type: CardType;
  date: Date;
  transactions: any[];

  constructor(card: Card) {
    this.id = card.id;
    this.balance = card.balance;
    this.password = card.password;
    this.type = card.type;
    this.transactions = card.transactions;
    this.date = card.date;
  }

}

export type CardType = 'VISA' | 'MASTERCARD';
