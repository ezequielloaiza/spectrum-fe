import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSynergeyesComponent } from './confirmation-synergeyes.component';

describe('ConfirmationSynergeyesComponent', () => {
  let component: ConfirmationSynergeyesComponent;
  let fixture: ComponentFixture<ConfirmationSynergeyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationSynergeyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSynergeyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
