import { IModel } from './.model';


export class Card implements IModel {

  id: number;
  activate: boolean;
  balance: number;
  password: string;
  type: CardType;
  date: Date;
  transactions: any[];

  constructor(card: Card) {
    this.id = card.id;
    this.activate = card.activate;
    this.balance = card.balance;
    this.password = card.password;
    this.type = card.type;
    this.transactions = card.transactions;
    this.date = card.date;
  }

}

export type CardType = 'VISA' | 'MASTERCARD';
