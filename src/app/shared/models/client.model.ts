import { IModel } from './.model';
import { Card } from './card.model';


export class Client implements IModel {

  id: number;
  firstName: string;
  lastName: string;
  cards: Card[];

  get fullName(): string {
    return this.lastName + ' ' + this.firstName;
  }

  constructor(client: Client) {
    this.id = client.id;
    this.firstName = client.firstName;
    this.lastName = client.lastName;
    this.cards = client.cards;
  }
}
