import { TestBed, inject } from '@angular/core/testing';

import { ProductsRequestedService } from './products-requested.service';

describe('ProductsRequestedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsRequestedService]
    });
  });

  it('should be created', inject([ProductsRequestedService], (service: ProductsRequestedService) => {
    expect(service).toBeTruthy();
  }));
});
