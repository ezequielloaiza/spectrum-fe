import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBalanceOrderComponent } from './notification-balance-order.component';

describe('NotificationBalanceOrderComponent', () => {
  let component: NotificationBalanceOrderComponent;
  let fixture: ComponentFixture<NotificationBalanceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBalanceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBalanceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
