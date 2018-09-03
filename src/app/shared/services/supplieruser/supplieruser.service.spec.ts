import { TestBed, inject } from '@angular/core/testing';

import { SupplieruserService } from './supplieruser.service';

describe('SupplieruserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplieruserService]
    });
  });

  it('should be created', inject([SupplieruserService], (service: SupplieruserService) => {
    expect(service).toBeTruthy();
  }));
});
