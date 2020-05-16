import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';


describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let methods: string[] = ['GET', 'POST', 'DELETE'];
  methods.forEach((method: string) => {
    it(`should have ${ method } method`, () => {
      expect(service[method]).toBeTruthy(`${ method } method is not defined`);
    });
  })
});
