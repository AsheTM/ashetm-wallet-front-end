import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { HistoryService } from './history.service';


@Component({
  selector:         'ashetm-wallet-history',
  templateUrl:      './history.component.html',
  styleUrls:        ['./history.component.scss'],
  encapsulation:    ViewEncapsulation.Emulated,
  changeDetection:  ChangeDetectionStrategy.OnPush,
  providers:        [HistoryService]
})
export class HistoryComponent { }
