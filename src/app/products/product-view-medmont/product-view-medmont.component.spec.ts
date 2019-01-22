import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewMedmontComponent } from './product-view-medmont.component';

describe('ProductViewMedmontComponent', () => {
  let component: ProductViewMedmontComponent;
  let fixture: ComponentFixture<ProductViewMedmontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewMedmontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewMedmontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
