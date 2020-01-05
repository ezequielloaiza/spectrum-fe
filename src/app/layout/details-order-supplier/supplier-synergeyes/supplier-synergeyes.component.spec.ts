import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSynergeyesComponent } from './supplier-synergeyes.component';

describe('SupplierSynergeyesComponent', () => {
  let component: SupplierSynergeyesComponent;
  let fixture: ComponentFixture<SupplierSynergeyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierSynergeyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSynergeyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
