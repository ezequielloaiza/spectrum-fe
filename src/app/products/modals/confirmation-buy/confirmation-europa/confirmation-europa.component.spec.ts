import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationEuropaComponent } from './confirmation-europa.component';

describe('ConfirmationEuropaComponent', () => {
  let component: ConfirmationEuropaComponent;
  let fixture: ComponentFixture<ConfirmationEuropaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationEuropaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
