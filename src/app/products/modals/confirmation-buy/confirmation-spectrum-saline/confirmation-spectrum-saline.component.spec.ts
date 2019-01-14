import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSpectrumSalineComponent } from './confirmation-spectrum-saline.component';

describe('ConfirmationSpectrumSalineComponent', () => {
  let component: ConfirmationSpectrumSalineComponent;
  let fixture: ComponentFixture<ConfirmationSpectrumSalineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationSpectrumSalineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSpectrumSalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
