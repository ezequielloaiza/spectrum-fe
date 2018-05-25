import { TestBed, inject } from '@angular/core/testing';

import { BussinesTypeService } from './bussines-type.service';

describe('BussinesTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BussinesTypeService]
    });
  });

  it('should be created', inject([BussinesTypeService], (service: BussinesTypeService) => {
    expect(service).toBeTruthy();
  }));
});
