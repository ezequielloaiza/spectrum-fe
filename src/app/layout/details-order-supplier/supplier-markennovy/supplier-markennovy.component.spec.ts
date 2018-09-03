import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMarkennovyComponent } from './supplier-markennovy.component';

describe('SupplierMarkennovyComponent', () => {
  let component: SupplierMarkennovyComponent;
  let fixture: ComponentFixture<SupplierMarkennovyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMarkennovyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMarkennovyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
