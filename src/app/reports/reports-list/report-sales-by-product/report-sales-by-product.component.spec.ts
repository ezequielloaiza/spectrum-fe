import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSalesByProductComponent } from './report-sales-by-product.component';

describe('ReportSalesByProductComponent', () => {
  let component: ReportSalesByProductComponent;
  let fixture: ComponentFixture<ReportSalesByProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSalesByProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSalesByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
