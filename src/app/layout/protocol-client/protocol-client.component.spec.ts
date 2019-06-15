import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolClientComponent } from './protocol-client.component';

describe('ProtocolClientComponent', () => {
  let component: ProtocolClientComponent;
  let fixture: ComponentFixture<ProtocolClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
