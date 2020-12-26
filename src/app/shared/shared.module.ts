import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  SHARED_TOKEN_VALUE_HTTP_PROVIDER,
  SHARED_TOKEN_VALUE_SESSION_PROVIDER
} from './shared.provider';
import { SharedModuleConfigServices } from './shared.type';

import { HttpInterceptor } from './interceptors';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
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

  static forRoot({ http, session }: SharedModuleConfigServices): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        // {
        //   provide:  SHARED_TOKEN_VALUE_HTTP_PROVIDER,
        //   useValue: http
        // }, {
        //   provide:  SHARED_TOKEN_VALUE_SESSION_PROVIDER,
        //   useValue: session
        // }
      ]
    };
  }

}
