import { TestBed } from '@angular/core/testing';

import { WalletClientResolver } from './wallet-client.resolver';

describe('WalletClientResolver', () => {
  let service: WalletClientResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletClientResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
