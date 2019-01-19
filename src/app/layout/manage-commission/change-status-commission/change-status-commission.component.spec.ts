import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatusCommissionComponent } from './change-status-commission.component';

describe('ChangeStatusCommissionComponent', () => {
  let component: ChangeStatusCommissionComponent;
  let fixture: ComponentFixture<ChangeStatusCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStatusCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatusCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
