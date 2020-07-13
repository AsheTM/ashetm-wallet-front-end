import { TestBed } from '@angular/core/testing';

import { WalletCardResolver } from './wallet-card.resolver';

describe('WalletCardResolver', () => {
  let service: WalletCardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletCardResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
