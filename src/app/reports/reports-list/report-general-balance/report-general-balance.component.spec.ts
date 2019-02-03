import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneralBalanceComponent } from './report-general-balance.component';

describe('ReportGeneralBalanceComponent', () => {
  let component: ReportGeneralBalanceComponent;
  let fixture: ComponentFixture<ReportGeneralBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGeneralBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGeneralBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
