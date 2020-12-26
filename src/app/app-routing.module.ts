import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer, UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';

import { CorePreloadStrategy } from './core';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    preloadingStrategy: CorePreloadStrategy,
    useHash: false,
    enableTracing: environment.production,
    errorHandler(error: any) {
      console.warn('AppRoutingModule errorHandler', { error });
    },
    malformedUriErrorHandler(error: URIError, urlSerializer: UrlSerializer, url: string): UrlTree {
      console.warn('AppRoutingModule malformedUriErrorHandler', { error });

      return urlSerializer.parse('');
    },
    paramsInheritanceStrategy: 'emptyOnly',
    scrollPositionRestoration: 'enabled',
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
