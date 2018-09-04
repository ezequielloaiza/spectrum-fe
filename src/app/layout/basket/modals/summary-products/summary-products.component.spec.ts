import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryProductsComponent } from './summary-products.component';

describe('SummaryProductsComponent', () => {
  let component: SummaryProductsComponent;
  let fixture: ComponentFixture<SummaryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
