import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSellerComponent } from './client-seller.component';

describe('ClientSellerComponent', () => {
  let component: ClientSellerComponent;
  let fixture: ComponentFixture<ClientSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
