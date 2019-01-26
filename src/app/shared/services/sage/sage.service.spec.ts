import { TestBed, inject } from '@angular/core/testing';

import { SageService } from './sage.service';

describe('SageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SageService]
    });
  });

  it('should be created', inject([SageService], (service: SageService) => {
    expect(service).toBeTruthy();
  }));
});
