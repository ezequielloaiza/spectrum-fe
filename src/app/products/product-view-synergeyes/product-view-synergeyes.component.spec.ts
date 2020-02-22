import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewSynergeyesComponent } from './product-view-synergeyes.component';

describe('ProductViewSynergeyesComponent', () => {
  let component: ProductViewSynergeyesComponent;
  let fixture: ComponentFixture<ProductViewSynergeyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewSynergeyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewSynergeyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
