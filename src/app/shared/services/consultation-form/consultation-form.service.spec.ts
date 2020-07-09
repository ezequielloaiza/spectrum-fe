import { TestBed, inject } from '@angular/core/testing';

import { ConsultationFormService } from './consultation-form.service';

describe('ConsultationFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultationFormService]
    });
  });

  it('should be created', inject([ConsultationFormService], (service: ConsultationFormService) => {
    expect(service).toBeTruthy();
  }));
});
