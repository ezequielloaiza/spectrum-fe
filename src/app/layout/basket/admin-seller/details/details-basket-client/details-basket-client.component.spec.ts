import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBasketClientComponent } from './details-basket-client.component';

describe('DetailsBasketClientComponent', () => {
  let component: DetailsBasketClientComponent;
  let fixture: ComponentFixture<DetailsBasketClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsBasketClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBasketClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
