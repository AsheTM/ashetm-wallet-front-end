import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { environment } from 'src/environments/environment';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    // NO_ERRORS_SCHEMA
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    CoreModule,
    SharedModule.forRoot(environment.configuration.shared)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
