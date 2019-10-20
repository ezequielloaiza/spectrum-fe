import { TestBed, inject } from '@angular/core/testing';

import { QuickbooksService } from './quickbooks.service';

describe('QuickbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickbooksService]
    });
  });

  it('should be created', inject([QuickbooksService], (service: QuickbooksService) => {
    expect(service).toBeTruthy();
  }));
});
