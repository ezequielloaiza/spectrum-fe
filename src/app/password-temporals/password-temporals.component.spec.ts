import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTemporalsComponent } from './password-temporals.component';

describe('PasswordTemporalsComponent', () => {
  let component: PasswordTemporalsComponent;
  let fixture: ComponentFixture<PasswordTemporalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordTemporalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordTemporalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
