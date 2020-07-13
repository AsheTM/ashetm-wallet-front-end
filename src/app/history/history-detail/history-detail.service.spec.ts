import { TestBed } from '@angular/core/testing';

import { HistoryDetailService } from './history-detail.service';

describe('HistoryDetailService', () => {
  let service: HistoryDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
