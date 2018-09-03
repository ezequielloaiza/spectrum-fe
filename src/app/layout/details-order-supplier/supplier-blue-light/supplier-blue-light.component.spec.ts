import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierBlueLightComponent } from './supplier-blue-light.component';

describe('SupplierBlueLightComponent', () => {
  let component: SupplierBlueLightComponent;
  let fixture: ComponentFixture<SupplierBlueLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierBlueLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierBlueLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
