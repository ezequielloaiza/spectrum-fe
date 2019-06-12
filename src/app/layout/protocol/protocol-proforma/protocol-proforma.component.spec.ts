import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolProformaComponent } from './protocol-proforma.component';

describe('ProtocolProformaComponent', () => {
  let component: ProtocolProformaComponent;
  let fixture: ComponentFixture<ProtocolProformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolProformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
