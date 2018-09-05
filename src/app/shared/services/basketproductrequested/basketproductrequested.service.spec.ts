import { TestBed, inject } from '@angular/core/testing';

import { BasketproductrequestedService } from './basketproductrequested.service';

describe('BasketproductrequestedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketproductrequestedService]
    });
  });

  it('should be created', inject([BasketproductrequestedService], (service: BasketproductrequestedService) => {
    expect(service).toBeTruthy();
  }));
});
