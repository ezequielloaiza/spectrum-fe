import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAddressModalComponent } from './shipping-address-modal.component';

describe('ShippingAddressModalComponent', () => {
  let component: ShippingAddressModalComponent;
  let fixture: ComponentFixture<ShippingAddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingAddressModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
