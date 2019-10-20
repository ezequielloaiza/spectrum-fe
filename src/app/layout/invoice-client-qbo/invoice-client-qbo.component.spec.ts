import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceClientQBOComponent } from './invoice-client-qbo.component';

describe('InvoiceClientQBOComponent', () => {
  let component: InvoiceClientQBOComponent;
  let fixture: ComponentFixture<InvoiceClientQBOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceClientQBOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceClientQBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
