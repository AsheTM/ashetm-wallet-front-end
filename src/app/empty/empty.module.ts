import { NgModule } from '@angular/core';

import { EmptyComponent } from './empty.component';
import { EmptyRoutingModule } from './empty-routing.module';
import { EmptyGuard } from './empty.guard';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    SharedModule,

    EmptyRoutingModule
  ],
  providers: [
    EmptyGuard
  ]
})
export class EmptyModule { }
