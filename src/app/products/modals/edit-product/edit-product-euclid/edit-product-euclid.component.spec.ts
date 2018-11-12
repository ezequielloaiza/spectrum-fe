import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductEuclidComponent } from './edit-product-euclid.component';

describe('EditProductEuclidComponent', () => {
  let component: EditProductEuclidComponent;
  let fixture: ComponentFixture<EditProductEuclidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductEuclidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductEuclidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
