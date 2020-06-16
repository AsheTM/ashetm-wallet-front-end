import { Client } from '../models';
import { IMapping } from './.mapping';


export interface IClientMapping extends IMapping {
  client: Client;
};

export function isIClientMapping(obj: any): obj is IClientMapping {
  return 'client' in obj;
}

export interface IClientsMapping extends IMapping {
  clients: Client[];
};

export function isIClientsMapping(obj: any): obj is IClientsMapping {
  return 'clients' in obj;
}
