import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSmartlensComponent } from './confirmation-smartlens.component';

describe('ConfirmationSmartlensComponent', () => {
  let component: ConfirmationSmartlensComponent;
  let fixture: ComponentFixture<ConfirmationSmartlensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationSmartlensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSmartlensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
