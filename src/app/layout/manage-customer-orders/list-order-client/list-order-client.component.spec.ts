import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderClientComponent } from './list-order-client.component';

describe('ListOrderClientComponent', () => {
  let component: ListOrderClientComponent;
  let fixture: ComponentFixture<ListOrderClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
