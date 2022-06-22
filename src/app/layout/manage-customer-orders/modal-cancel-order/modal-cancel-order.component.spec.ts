import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelOrderComponent } from './modal-cancel-order.component';

describe('ModalCancelOrderComponent', () => {
  let component: ModalCancelOrderComponent;
  let fixture: ComponentFixture<ModalCancelOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCancelOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCancelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
