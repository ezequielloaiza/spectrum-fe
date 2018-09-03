import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierEuclidComponent } from './supplier-euclid.component';

describe('SupplierEuclidComponent', () => {
  let component: SupplierEuclidComponent;
  let fixture: ComponentFixture<SupplierEuclidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierEuclidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierEuclidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
