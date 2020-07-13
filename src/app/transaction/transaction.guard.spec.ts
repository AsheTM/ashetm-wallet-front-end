import { TestBed } from '@angular/core/testing';

import { TransactionGuard } from './transaction.guard';

describe('TransactionGuard', () => {
  let guard: TransactionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TransactionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
