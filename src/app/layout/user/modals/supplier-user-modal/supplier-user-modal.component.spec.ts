import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierUserModalComponent } from './supplier-user-modal.component';

describe('SupplierUserModalComponent', () => {
  let component: SupplierUserModalComponent;
  let fixture: ComponentFixture<SupplierUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
