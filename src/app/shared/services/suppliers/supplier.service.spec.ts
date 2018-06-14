import { TestBed, inject } from '@angular/core/testing';

import { SupplierService } from './supplier.service';

describe('Supplier', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierService]
    });
  });

  it('should be created', inject([SupplierService], (service: SupplierService) => {
    expect(service).toBeTruthy();
  }));
});
