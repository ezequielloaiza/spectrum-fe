import { TestBed, inject } from '@angular/core/testing';

import { InvoiceClientService } from './invoice-client.service';

describe('InvoiceClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceClientService]
    });
  });

  it('should be created', inject([InvoiceClientService], (service: InvoiceClientService) => {
    expect(service).toBeTruthy();
  }));
});
