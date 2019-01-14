import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductSpectrumSalineComponent } from './edit-product-spectrum-saline.component';

describe('EditProductSpectrumSalineComponent', () => {
  let component: EditProductSpectrumSalineComponent;
  let fixture: ComponentFixture<EditProductSpectrumSalineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductSpectrumSalineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductSpectrumSalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
