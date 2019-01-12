import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationLenticonComponent } from './confirmation-lenticon.component';

describe('ConfirmationLenticonComponent', () => {
  let component: ConfirmationLenticonComponent;
  let fixture: ComponentFixture<ConfirmationLenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationLenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationLenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
