import { TestBed } from '@angular/core/testing';

import { GemeniServiceService } from './gemeni-service.service';

describe('GemeniServiceService', () => {
  let service: GemeniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemeniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
