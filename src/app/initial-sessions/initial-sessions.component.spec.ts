import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSessionsComponent } from './initial-sessions.component';

describe('InitialSessionsComponent', () => {
  let component: InitialSessionsComponent;
  let fixture: ComponentFixture<InitialSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
