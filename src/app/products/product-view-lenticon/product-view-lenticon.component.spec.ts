import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewLenticonComponent } from './product-view-lenticon.component';

describe('ProductViewLenticonComponent', () => {
  let component: ProductViewLenticonComponent;
  let fixture: ComponentFixture<ProductViewLenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewLenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewLenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
