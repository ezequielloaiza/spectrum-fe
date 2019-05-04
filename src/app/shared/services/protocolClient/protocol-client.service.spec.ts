import { TestBed, inject } from '@angular/core/testing';

import { ProtocolClientService } from './protocol-client.service';

describe('ProtocolClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtocolClientService]
    });
  });

  it('should be created', inject([ProtocolClientService], (service: ProtocolClientService) => {
    expect(service).toBeTruthy();
  }));
});
