import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, SharedModuleConfig } from './core';
import { SharedModule } from './shared';


const sharedModuleConfig: SharedModuleConfig = {
  services: {
    http: {
      url:  'https://ashetm-wallet-backend.herokuapp.com/'
    }
  }
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule.forRoot(sharedModuleConfig),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
