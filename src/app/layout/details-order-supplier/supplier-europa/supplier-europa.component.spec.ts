import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierEuropaComponent } from './supplier-europa.component';

describe('SupplierEuropaComponent', () => {
  let component: SupplierEuropaComponent;
  let fixture: ComponentFixture<SupplierEuropaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierEuropaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
