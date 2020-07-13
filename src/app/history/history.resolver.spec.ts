import { TestBed } from '@angular/core/testing';

import { HistoryResolver } from './history.resolver';

describe('HistoryResolver', () => {
  let service: HistoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
