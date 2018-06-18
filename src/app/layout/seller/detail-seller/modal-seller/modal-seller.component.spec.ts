import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSellerComponent } from './modal-seller.component';

describe('ModalSellerComponent', () => {
  let component: ModalSellerComponent;
  let fixture: ComponentFixture<ModalSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
