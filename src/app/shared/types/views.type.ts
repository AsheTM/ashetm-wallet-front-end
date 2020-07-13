import { Card, Client, Transaction } from '../models';


export type View  = {
  now: Date;
};

export type RequestView   = View;

export type ResponseView  = View;

export type ActivateCardResponseView      = {
  activate: boolean;
};

export type AuthenticateCardResponseView  = {
  authenticate: boolean;
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
