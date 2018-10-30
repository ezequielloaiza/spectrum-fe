import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductMagicLookComponent } from './edit-product-magic-look.component';

describe('EditProductMagicLookComponent', () => {
  let component: EditProductMagicLookComponent;
  let fixture: ComponentFixture<EditProductMagicLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductMagicLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductMagicLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
