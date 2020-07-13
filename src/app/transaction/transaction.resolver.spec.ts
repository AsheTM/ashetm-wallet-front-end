import { TestBed } from '@angular/core/testing';

import { TransactionResolver } from './transaction.resolver';

describe('TransactionResolver', () => {
  let service: TransactionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
