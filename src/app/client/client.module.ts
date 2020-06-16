import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    ClientRoutingModule,

    SharedModule
  ]
})
export class ClientModule { }
