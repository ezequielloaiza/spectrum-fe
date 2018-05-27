import { TestBed, inject } from '@angular/core/testing';

import { BusinessTypeService } from './business-type.service';

describe('BussinesTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessTypeService]
    });
  });

  it('should be created', inject([BusinessTypeService], (service: BusinessTypeService) => {
    expect(service).toBeTruthy();
  }));
});
