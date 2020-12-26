import { sharedModuleConfigServices } from './environment.common';
import { Environment } from './environment.type';


export const environment: Environment = {
  production: true,
  configuration:  {
    shared: {
      ...sharedModuleConfigServices,
      http: {
        ...sharedModuleConfigServices.http,
        url: 'https://ashetm-wallet-backend.herokuapp.com',
        swagger: 'https://ashetm-wallet-backend.herokuapp.com/swagger-ui.html'
      }
    }
  }
};
