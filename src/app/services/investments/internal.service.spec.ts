import { TestBed } from '@angular/core/testing';

import { InternalServicesService } from './internal.service';

describe('InternalServicesService', () => {
  let service: InternalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
