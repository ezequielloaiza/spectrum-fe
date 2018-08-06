import { TestBed, inject } from '@angular/core/testing';

import { FtpService } from './ftp.service';

describe('FtpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FtpService]
    });
  });

  it('should be created', inject([FtpService], (service: FtpService) => {
    expect(service).toBeTruthy();
  }));
});
