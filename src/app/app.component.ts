import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector:         'ashetm-root',
  template:         '<router-outlet></router-outlet>',
  encapsulation:    ViewEncapsulation.None,
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
