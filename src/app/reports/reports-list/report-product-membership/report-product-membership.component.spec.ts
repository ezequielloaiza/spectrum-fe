import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductMembershipComponent } from './report-product-membership.component';

describe('ReportProductMembershipComponent', () => {
  let component: ReportProductMembershipComponent;
  let fixture: ComponentFixture<ReportProductMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
