import { TestBed } from '@angular/core/testing';

import { CabService } from './cab-booking-service.service';

describe('CabService', () => {
  let service: CabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
