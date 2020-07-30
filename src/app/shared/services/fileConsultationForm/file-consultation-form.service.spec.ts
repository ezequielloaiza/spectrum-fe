import { TestBed, inject } from '@angular/core/testing';

import { FileConsultationFormService } from './file-consultation-form.service';

describe('FileConsultationFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileConsultationFormService]
    });
  });

  it('should be created', inject([FileConsultationFormService], (service: FileConsultationFormService) => {
    expect(service).toBeTruthy();
  }));
});
