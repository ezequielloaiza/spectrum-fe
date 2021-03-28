import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrustingCompanyModalComponent } from './entrusting-company-modal.component';

describe('EntrustingCompanyModalComponent', () => {
  let component: EntrustingCompanyModalComponent;
  let fixture: ComponentFixture<EntrustingCompanyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrustingCompanyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrustingCompanyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
