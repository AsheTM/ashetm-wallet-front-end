import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ashetm-wallet-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
