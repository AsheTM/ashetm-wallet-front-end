import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'wallet',
    loadChildren: () => import('./wallet').then(m => m.WalletModule)
  },
  /* Dev Purpose */
  {
    path: '**',
    pathMatch:  'prefix',
    redirectTo: '/wallet'
  }
  /*             */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
