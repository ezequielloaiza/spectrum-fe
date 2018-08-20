import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsSendInvoiceComponent } from './modals-send-invoice.component';

describe('ModalsSendInvoiceComponent', () => {
  let component: ModalsSendInvoiceComponent;
  let fixture: ComponentFixture<ModalsSendInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsSendInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsSendInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
