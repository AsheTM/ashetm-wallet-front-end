import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  WALLET_SERVICES_HTTP,
  WALLET_SERVICES_SESSION
} from './shared.provider';
import { SharedModuleConfig } from './shared.type';
import {
  CardComponent,
  AuthenticationKeyboardComponent
} from './components';
import { HttpInterceptor } from './interceptors';
import { HttpService, RedirectService, SessionService } from './services';


@NgModule({
  declarations: [
    CardComponent,
    AuthenticationKeyboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    AuthenticationKeyboardComponent,

    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
          provide:  WALLET_SERVICES_HTTP,
          useValue: services.http
        }, {
          provide:  WALLET_SERVICES_SESSION,
          useValue: services.session
        }
      ]
    };
  }

}
