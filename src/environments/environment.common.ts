import { SharedModuleConfig } from "src/app/shared";


export const sharedModuleConfig: SharedModuleConfig = {
  services: {
    http: {
      controller: {
        prefix: '/api/v1',
        api:    {
          showClients:      { method: 'get', path: '/client' },
          showClient:       { method: 'get', path: '/client/{idClient}' },
          addClient:        { method: 'get', path: '/client' },

          showCards:        { method: 'get', path: '/client/{idClient}/card' },
          showCard:         { method: 'get', path: '/client/{idClient}/card/{idCard}' },
          addCard:          { method: 'post', path: '/client/{idClient}/card' },
          authenticate:     { method: 'post', path: '/client/{idClient}/card/{idCard}/authenticate' },

          showTransactions: { method: 'get', path: '/client/{idClient}/card/{idCard}/transaction' },
          showTransaction:  { method: 'get', path: '/client/{idClient}/card/{idCard}/transaction/{idTransaction}' },
          makeTransaction:  { method: 'post', path: '/client/{idClient}/card/{idCard}/transaction' }
        }
      }
    },
    session: {
      password: {
        length: 4,
        lag:    0_500
      },
      storage: {
        session: {
          name: 'card-session'
        }
      }
    }
  }
};
