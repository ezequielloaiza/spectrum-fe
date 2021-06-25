import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMoldedLensesComponent } from './confirmation-molded-lenses.component';

describe('ConfirmationMoldedLensesComponent', () => {
  let component: ConfirmationMoldedLensesComponent;
  let fixture: ComponentFixture<ConfirmationMoldedLensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationMoldedLensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMoldedLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
