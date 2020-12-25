import { Card, Client, Transaction } from '../models';
import { CardTypeEnum } from '../enums';


export type View  = {
  now?: Date;
};

export type RequestView   = View;

export type ClientRequestView             = {
  firstName:  string;
  lastName:   string;
};

export type CardRequestView               = {
  type:       CardTypeEnum;
  password?:  string;
};

export type AuthenticateCardRequestView   = {
  password: string;
};

export type TransactionRequestView        = {
  amount: number;
};

export type ResponseView  = View;

export type AuthenticateCardResponseView  = {
  authenticate: boolean;
};

export type BalanceCardResponseView       = {
  id:       number;
  balance:  number;
};

export type CardResponseView              = {
  card: Card;
};

export type CardsResponseView             = {
  cards:  Card[];
};

export type ClientResponseView            = {
  client: Client;
};

export type ClientsResponseView           = {
  clients:  Client[];
};

export type TransactionResponseView       = {
  transaction: Transaction;
};

export type TransactionsResponseView      = {
  transactions:  Transaction[];
};
