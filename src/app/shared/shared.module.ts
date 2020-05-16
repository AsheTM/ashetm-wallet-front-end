import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  SharedModuleConfig,
  WALLET_BACKEND_API_URL
} from '../core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule {

  static forRoot(sharedModuleConfig: SharedModuleConfig): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide:  WALLET_BACKEND_API_URL,
          useValue: sharedModuleConfig.services.http.url
        }
      ]
    };
  }

}
