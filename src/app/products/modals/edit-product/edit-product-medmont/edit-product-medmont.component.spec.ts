import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductMedmontComponent } from './edit-product-medmont.component';

describe('EditProductMedmontComponent', () => {
  let component: EditProductMedmontComponent;
  let fixture: ComponentFixture<EditProductMedmontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductMedmontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductMedmontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
