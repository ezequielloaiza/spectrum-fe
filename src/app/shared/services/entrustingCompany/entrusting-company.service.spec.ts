import { TestBed, inject } from '@angular/core/testing';

import { EntrustingCompanyService } from './entrusting-company.service';

describe('EntrustingCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrustingCompanyService]
    });
  });

  it('should be created', inject([EntrustingCompanyService], (service: EntrustingCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
