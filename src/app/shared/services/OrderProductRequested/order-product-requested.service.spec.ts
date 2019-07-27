import { TestBed, inject } from '@angular/core/testing';

import { OrderProductRequestedService } from './order-product-requested.service';

describe('OrderProductRequestedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderProductRequestedService]
    });
  });

  it('should be created', inject([OrderProductRequestedService], (service: OrderProductRequestedService) => {
    expect(service).toBeTruthy();
  }));
});
