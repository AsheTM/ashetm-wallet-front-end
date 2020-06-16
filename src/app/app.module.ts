import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule, SharedModuleConfig } from './shared';
import { ClientModule } from './client';


const sharedModuleConfig: SharedModuleConfig = {
  services: {
    http: {
      // url:        'http://localhost:8081',
      url:        'https://ashetm-wallet-backend.herokuapp.com',
      controller: {
        prefix: '/v1/api',
        api:    {
          showClients:      { method: 'get', path: '/client/' },
          showClient:       { method: 'get', path: '/client/{idClient}' },
          addClient:        { method: 'get', path: '/client' },

          showCards:        { method: 'get', path: '/client/{idClient}/card' },
          showCard:         { method: 'get', path: '/client/{idClient}/card/{idCard}' },
          addCard:          { method: 'post', path: '/client/{idClient}/card' },
          withdraw:         { method: 'post', path: '/client/{idClient}/card/{idCard}/withdraw' },
          deposit:          { method: 'post', path: '/client/{idClient}/card/{idCard}/deposit' },
          activateCard:     { method: 'patch', path: '/client/{idClient}/card/{idCard}' },
          deactivateCard:   { method: 'delete', path: '/client/{idClient}/card/{idCard}' },

          showTransactions: { method: 'get', path: '/client/{idClient}/card/{idCard}/transaction' },
          showTransaction:  { method: 'get', path: '/client/{idClient}/card/{idCard}/transaction' }
        }
      }
    },
    session: {
      storage: {
        name: 'client-session'
      }
    }
  }
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    CoreModule,
    SharedModule.forRoot(sharedModuleConfig),

    ClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
