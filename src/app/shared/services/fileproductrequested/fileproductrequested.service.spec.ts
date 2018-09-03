import { TestBed, inject } from '@angular/core/testing';

import { FileProductRequestedService } from './file-product-requested.service';

describe('FileProductRequestedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileProductRequestedService]
    });
  });

  it('should be created', inject([FileProductRequestedService], (service: FileProductRequestedService) => {
    expect(service).toBeTruthy();
  }));
});
