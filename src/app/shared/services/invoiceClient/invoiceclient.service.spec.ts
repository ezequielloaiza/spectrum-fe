import { TestBed, inject } from '@angular/core/testing';

import { InvoiceclientService } from './invoiceclient.service';

describe('InvoiceclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceclientService]
    });
  });

  it('should be created', inject([InvoiceclientService], (service: InvoiceclientService) => {
    expect(service).toBeTruthy();
  }));
});
