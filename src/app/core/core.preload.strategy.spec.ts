import { TestBed } from '@angular/core/testing';

import { CorePreloadStrategy } from './core.preload.strategy';

describe('PreloadStrategy', () => {
  let service: CorePreloadStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorePreloadStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
