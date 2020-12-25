import { Client } from "../shared";

module WalletResolver {
  export namespace Card {
    export const INDEX: string = Symbol('WALLET_RESOLVER_CARD').toString();
  }
  export namespace Client {
    export const INDEX: string = Symbol('WALLET_RESOLVER_CLIENT').toString();
  }
}

export const WALLET_RESOLVER_CARD: string = WalletResolver.Card.INDEX;
export const WALLET_RESOLVER_CLIENT: string = WalletResolver.Client.INDEX;
