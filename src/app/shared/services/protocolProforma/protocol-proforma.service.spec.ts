import { TestBed, inject } from '@angular/core/testing';

import { ProtocolProformaService } from './protocol-proforma.service';

describe('ProtocolProformaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtocolProformaService]
    });
  });

  it('should be created', inject([ProtocolProformaService], (service: ProtocolProformaService) => {
    expect(service).toBeTruthy();
  }));
});
