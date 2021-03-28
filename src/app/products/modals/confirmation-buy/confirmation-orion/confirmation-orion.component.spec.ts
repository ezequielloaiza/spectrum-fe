import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationOrionComponent } from './confirmation-orion.component';

describe('ConfirmationOrionComponent', () => {
  let component: ConfirmationOrionComponent;
  let fixture: ComponentFixture<ConfirmationOrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationOrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationOrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
