// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { sharedModuleConfigServices } from './environment.common';
import { Environment } from './environment.type';


export const environment: Environment = {
  production: false,
  configuration: {
    shared: {
      ...sharedModuleConfigServices,
      http: {
        ...sharedModuleConfigServices.http,
        url: 'http://localhost:8081',
        swagger: 'https://localhost:8081/swagger-ui.html'
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
