import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBalanceClientComponent } from './report-balance-client.component';

describe('ReportBalanceClientComponent', () => {
  let component: ReportBalanceClientComponent;
  let fixture: ComponentFixture<ReportBalanceClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBalanceClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBalanceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
