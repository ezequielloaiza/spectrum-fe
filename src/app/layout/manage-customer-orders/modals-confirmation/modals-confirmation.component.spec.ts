import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsConfirmationComponent } from './modals-confirmation.component';

describe('ModalsConfirmationComponent', () => {
  let component: ModalsConfirmationComponent;
  let fixture: ComponentFixture<ModalsConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
