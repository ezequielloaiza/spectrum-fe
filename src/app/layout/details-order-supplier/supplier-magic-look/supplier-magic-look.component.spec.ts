import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMagicLookComponent } from './supplier-magic-look.component';

describe('SupplierMagicLookComponent', () => {
  let component: SupplierMagicLookComponent;
  let fixture: ComponentFixture<SupplierMagicLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMagicLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMagicLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
