import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./client').then(m => m.ClientModule)
  }, {
    path: 'wallet',
    loadChildren: () => import('./wallet').then(m => m.WalletModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
