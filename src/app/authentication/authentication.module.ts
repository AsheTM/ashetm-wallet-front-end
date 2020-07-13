import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationGuard } from './authentication.guard';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    SharedModule,

    AuthenticationRoutingModule
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
