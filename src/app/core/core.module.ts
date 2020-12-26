import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreImportOnce } from './core.import-once.class';
import { CorePreloadStrategy } from './core.preload.strategy';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  providers: [CorePreloadStrategy]
})
export class CoreModule extends CoreImportOnce {

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    super(coreModule);
  }

}
