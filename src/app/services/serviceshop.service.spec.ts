import { TestBed } from '@angular/core/testing';

import { ServiceshopService } from './serviceshop.service';

describe('ServiceshopService', () => {
  let service: ServiceshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
