import { TestBed, inject } from '@angular/core/testing';

import { ProductoimageService } from './productoimage.service';

describe('ProductoimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoimageService]
    });
  });

  it('should be created', inject([ProductoimageService], (service: ProductoimageService) => {
    expect(service).toBeTruthy();
  }));
});
