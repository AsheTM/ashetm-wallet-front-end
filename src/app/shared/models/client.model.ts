import { Model } from './.model';


interface IClient {
  getFullName(): string;
}

export class Client extends Model implements IClient {

  id: number;
  firstName: string;
  lastName: string;

  constructor(client: Client) {
    super();
    this.id = client.id;
    this.firstName = client.firstName;
    this.lastName = client.lastName;
  }

  getFullName(): string {
    return this.lastName + ' ' + this.firstName;
  }
}
