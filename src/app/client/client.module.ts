import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
