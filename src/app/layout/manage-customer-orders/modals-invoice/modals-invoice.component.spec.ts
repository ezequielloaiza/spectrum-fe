import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsInvoiceComponent } from './modals-invoice.component';

describe('ModalsInvoiceComponent', () => {
  let component: ModalsInvoiceComponent;
  let fixture: ComponentFixture<ModalsInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
