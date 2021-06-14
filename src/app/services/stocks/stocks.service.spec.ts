import { TestBed } from '@angular/core/testing';

import { stocksService } from './stocks.service';

describe('StocksService', () => {
  let service: stocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(stocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
