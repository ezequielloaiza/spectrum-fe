import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcelComponent } from './xcel.component';

describe('XcelComponent', () => {
  let component: XcelComponent;
  let fixture: ComponentFixture<XcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
