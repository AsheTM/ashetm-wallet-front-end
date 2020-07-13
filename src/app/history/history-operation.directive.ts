import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

import { HistoryOperationPipeAmount, HistoryOperationPipeLabel } from './history.type';


@Directive({
  selector: '[ashetmHistoryOperation]'
})
export class HistoryOperationDirective implements OnInit {

  private _label: HistoryOperationPipeLabel = null;

  @Input() set ashetmHistoryOperationFrom({ amount$: amount }: HistoryOperationPipeAmount) {
    let result: string = 'unkown operation';
    switch(true) {
      case amount > 0:  result = 'Deposit';   break;
      case amount < 0:  result = 'Withdraw';  break;
      case amount == 0: result = 'Check';     break;
    }
    this._label = { label$: result };
  }

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<HistoryOperationPipeLabel>) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this._label);
  }

}
