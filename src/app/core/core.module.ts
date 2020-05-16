import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImportOnce } from './classes';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ]
})
export class CoreModule extends ImportOnce {

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    super(coreModule);
  }

}
