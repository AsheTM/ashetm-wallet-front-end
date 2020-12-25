import { Environment } from './environment.type';
import { sharedModuleConfig } from './environment.common';


export const environment: Environment = {
  production: true,
  configuration:  {
    shared: {
      ...sharedModuleConfig,
      services: {
        ...sharedModuleConfig.services,
        http: {
          ...sharedModuleConfig.services.http,
          url: 'https://ashetm-wallet-backend.herokuapp.com',
          swagger: 'https://ashetm-wallet-backend.herokuapp.com/swagger-ui.html'
        }
      }
    }
  }
};
