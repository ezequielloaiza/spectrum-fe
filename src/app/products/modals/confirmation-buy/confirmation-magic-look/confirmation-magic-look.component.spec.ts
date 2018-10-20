import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMagicLookComponent } from './confirmation-magic-look.component';

describe('ConfirmationMagicLookComponent', () => {
  let component: ConfirmationMagicLookComponent;
  let fixture: ComponentFixture<ConfirmationMagicLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationMagicLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMagicLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
