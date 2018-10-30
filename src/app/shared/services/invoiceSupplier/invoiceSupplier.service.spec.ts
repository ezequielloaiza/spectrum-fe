import { TestBed, inject } from '@angular/core/testing';

import { InvoiceService } from './invoiceSupplier.service';

describe('InvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceService]
    });
  });

  it('should be created', inject([InvoiceService], (service: InvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
