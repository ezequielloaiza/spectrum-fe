import { TestBed, inject } from '@angular/core/testing';

import { FileinvoicepaymentService } from './fileinvoicepayment.service';

describe('FileinvoicepaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileinvoicepaymentService]
    });
  });

  it('should be created', inject([FileinvoicepaymentService], (service: FileinvoicepaymentService) => {
    expect(service).toBeTruthy();
  }));
});
