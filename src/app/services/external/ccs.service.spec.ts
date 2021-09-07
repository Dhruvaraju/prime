import { TestBed } from '@angular/core/testing';

import { CcsService } from './ccs.service';

describe('CcsService', () => {
  let service: CcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
