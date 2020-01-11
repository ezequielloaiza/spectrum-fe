import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewOrionComponent } from './product-view-orion.component';

describe('ProductViewOrionComponent', () => {
  let component: ProductViewOrionComponent;
  let fixture: ComponentFixture<ProductViewOrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewOrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewOrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
