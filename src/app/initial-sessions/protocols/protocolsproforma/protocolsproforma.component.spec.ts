import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsproformaComponent } from './protocolsproforma.component';

describe('ProtocolsproformaComponent', () => {
  let component: ProtocolsproformaComponent;
  let fixture: ComponentFixture<ProtocolsproformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolsproformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsproformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
