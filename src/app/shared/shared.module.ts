import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  WALLET_SERVICES_HTTP_BACKEND_URL,
  WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_API,
  WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_PREFIX,
  WALLET_SERVICES_SESSION_STORAGE,
  WALLET_SERVICES_SESSION_PASSWORD
} from './shared.provider';
import { SharedModuleConfig } from './shared.type';
import { HttpInterceptor } from './interceptors';
import {
  CardComponent,
  AuthenticationKeyboardComponent
} from './components';


@NgModule({
  declarations: [
    CardComponent,
    AuthenticationKeyboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    AuthenticationKeyboardComponent,

    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {

  static forRoot({ services }: SharedModuleConfig): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide:  WALLET_SERVICES_HTTP_BACKEND_URL,
          useValue: services.http.url
        }, {
          provide:  WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_API,
          useValue: services.http.controller.api
        }, {
          provide:  WALLET_SERVICES_HTTP_BACKEND_CONTROLLER_PREFIX,
          useValue: services.http.controller.prefix
        }, {
          provide:  WALLET_SERVICES_SESSION_STORAGE,
          useValue: services.session.storage
        }, {
          provide:  WALLET_SERVICES_SESSION_PASSWORD,
          useValue: services.session.password
        }
      ]
    };
  }

}
