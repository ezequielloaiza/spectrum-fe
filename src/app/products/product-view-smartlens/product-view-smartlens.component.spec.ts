import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewSmartlensComponent } from './product-view-smartlens.component';

describe('ProductViewLenticonComponent', () => {
  let component: ProductViewSmartlensComponent;
  let fixture: ComponentFixture<ProductViewSmartlensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewSmartlensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewSmartlensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
