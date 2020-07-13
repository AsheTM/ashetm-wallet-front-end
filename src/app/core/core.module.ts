import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImportOnce } from './classes';
import { PreloadStrategy } from './services';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  providers: [PreloadStrategy]
})
export class CoreModule extends ImportOnce {

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    super(coreModule);
  }

}
