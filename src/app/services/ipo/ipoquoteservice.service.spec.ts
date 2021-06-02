import { TestBed } from '@angular/core/testing';

import { IpoquoteserviceService } from './ipoquoteservice.service';

describe('IpoquoteserviceService', () => {
  let service: IpoquoteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoquoteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
