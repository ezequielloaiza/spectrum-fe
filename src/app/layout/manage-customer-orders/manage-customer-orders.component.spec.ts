import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerOrdersComponent } from './manage-customer-orders.component';

describe('ManageCustomerOrdersComponent', () => {
  let component: ManageCustomerOrdersComponent;
  let fixture: ComponentFixture<ManageCustomerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCustomerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
