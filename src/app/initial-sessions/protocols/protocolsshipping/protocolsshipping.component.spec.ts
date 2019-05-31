import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsshippingComponent } from './protocolsshipping.component';

describe('ProtocolsshippingComponent', () => {
  let component: ProtocolsshippingComponent;
  let fixture: ComponentFixture<ProtocolsshippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolsshippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsshippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
