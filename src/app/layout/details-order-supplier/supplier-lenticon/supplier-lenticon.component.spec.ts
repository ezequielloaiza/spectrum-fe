import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLenticonComponent } from './supplier-lenticon.component';

describe('SupplierLenticonComponent', () => {
  let component: SupplierLenticonComponent;
  let fixture: ComponentFixture<SupplierLenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
