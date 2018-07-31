import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordTemporalComponent } from './change-password-temporal.component';

describe('ChangePasswordTemporalComponent', () => {
  let component: ChangePasswordTemporalComponent;
  let fixture: ComponentFixture<ChangePasswordTemporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordTemporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
