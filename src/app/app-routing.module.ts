import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreloadStrategy } from './core';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./empty').then(index => index.EmptyModule),
    pathMatch: 'full'
  }, {
    path: 'wallet',
    loadChildren: () => import('./wallet').then(index => index.WalletModule),
    pathMatch: 'prefix'
  }, {
    path: '**',
    loadChildren: () => import('./not-found').then(index => index.NotFoundModule),
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadStrategy,
    // useHash: false,
    // enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
