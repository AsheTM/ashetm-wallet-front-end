import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ashetm-empty',
  template: '<p>Choose a card of a client</p>',
  styleUrls: ['./empty.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyComponent { }
