import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBuyComponent } from './confirmation-buy.component';

describe('ConfirmationBuyComponent', () => {
  let component: ConfirmationBuyComponent;
  let fixture: ComponentFixture<ConfirmationBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
