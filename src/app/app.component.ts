import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector:         'ashetm-root',
  templateUrl:      './app.component.html',
  styleUrls:        ['./app.component.scss'],
  encapsulation:    ViewEncapsulation.None,
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
