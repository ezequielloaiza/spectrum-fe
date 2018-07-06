import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrderClientComponent } from './details-order-client.component';

describe('DetailsOrderClientComponent', () => {
  let component: DetailsOrderClientComponent;
  let fixture: ComponentFixture<DetailsOrderClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOrderClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOrderClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
