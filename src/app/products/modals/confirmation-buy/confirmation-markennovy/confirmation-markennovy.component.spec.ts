import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMarkennovyComponent } from './confirmation-markennovy.component';

describe('ConfirmationMarkennovyComponent', () => {
  let component: ConfirmationMarkennovyComponent;
  let fixture: ComponentFixture<ConfirmationMarkennovyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationMarkennovyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMarkennovyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
