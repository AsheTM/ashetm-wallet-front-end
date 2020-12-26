import { InjectionToken } from "@angular/core";

import { SharedModuleConfigServicesHttp, SharedModuleConfigServicesSession } from "./shared.type";


module SharedToken {
  export namespace Http {
    // export const PROVIDER: symbol = Symbol('SHARED_TOKEN_VALUE_HTTP_PROVIDER');
    export const PROVIDER: InjectionToken<SharedModuleConfigServicesHttp>
      = new InjectionToken<SharedModuleConfigServicesHttp>('SHARED_TOKEN_VALUE_HTTP_PROVIDER');
  }

  export namespace Session {
    // export const PROVIDER: symbol = Symbol('SHARED_TOKEN_VALUE_SESSION_PROVIDER');
    export const PROVIDER: InjectionToken<SharedModuleConfigServicesSession>
      = new InjectionToken<SharedModuleConfigServicesSession>('SHARED_TOKEN_VALUE_SESSION_PROVIDER');
  }
}


export const SHARED_TOKEN_VALUE_HTTP_PROVIDER:    InjectionToken<SharedModuleConfigServicesHttp>    = SharedToken.Http.PROVIDER;
export const SHARED_TOKEN_VALUE_SESSION_PROVIDER: InjectionToken<SharedModuleConfigServicesSession> = SharedToken.Session.PROVIDER;
