import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBalanceComponent } from './notification-balance.component';

describe('NotificationBalanceComponent', () => {
  let component: NotificationBalanceComponent;
  let fixture: ComponentFixture<NotificationBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
