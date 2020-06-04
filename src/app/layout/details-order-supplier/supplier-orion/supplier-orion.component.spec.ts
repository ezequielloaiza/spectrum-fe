import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOrionComponent } from './supplier-orion.component';

describe('SupplierOrionComponent', () => {
  let component: SupplierOrionComponent;
  let fixture: ComponentFixture<SupplierOrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierOrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierOrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
