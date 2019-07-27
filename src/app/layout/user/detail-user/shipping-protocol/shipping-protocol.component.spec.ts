import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingProtocolComponent } from './shipping-protocol.component';

describe('ShippingProtocolComponent', () => {
  let component: ShippingProtocolComponent;
  let fixture: ComponentFixture<ShippingProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
