import { TestBed } from '@angular/core/testing';

import { EmptyGuard } from './empty.guard';

describe('EmptyGuard', () => {
  let guard: EmptyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmptyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
