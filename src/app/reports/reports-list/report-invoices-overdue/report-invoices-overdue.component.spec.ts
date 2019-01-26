import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInvoicesOverdueComponent } from './report-invoices-overdue.component';

describe('ReportInvoicesOverdueComponent', () => {
  let component: ReportInvoicesOverdueComponent;
  let fixture: ComponentFixture<ReportInvoicesOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInvoicesOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInvoicesOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
