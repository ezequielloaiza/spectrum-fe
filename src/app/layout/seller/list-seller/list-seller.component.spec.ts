import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSellerComponent } from './list-seller.component';

describe('ListSellerComponent', () => {
  let component: ListSellerComponent;
  let fixture: ComponentFixture<ListSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
