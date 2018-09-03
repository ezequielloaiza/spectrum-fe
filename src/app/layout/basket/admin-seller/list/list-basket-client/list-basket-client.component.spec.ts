import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBasketClientComponent } from './list-basket-client.component';

describe('ListBasketClientComponent', () => {
  let component: ListBasketClientComponent;
  let fixture: ComponentFixture<ListBasketClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBasketClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBasketClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
