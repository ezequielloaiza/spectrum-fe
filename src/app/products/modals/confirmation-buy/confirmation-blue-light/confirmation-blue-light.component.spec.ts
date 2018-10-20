import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBlueLightComponent } from './confirmation-blue-light.component';

describe('ConfirmationBlueLightComponent', () => {
  let component: ConfirmationBlueLightComponent;
  let fixture: ComponentFixture<ConfirmationBlueLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationBlueLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationBlueLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
