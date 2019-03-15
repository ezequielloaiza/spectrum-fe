import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrustingCompanyComponent } from './entrusting-company.component';

describe('EntrustingCompanyComponent', () => {
  let component: EntrustingCompanyComponent;
  let fixture: ComponentFixture<EntrustingCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrustingCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrustingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
