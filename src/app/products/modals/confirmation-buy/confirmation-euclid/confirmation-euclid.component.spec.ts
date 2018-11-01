import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationEuclidComponent } from './confirmation-euclid.component';

describe('ConfirmationEuclidComponent', () => {
  let component: ConfirmationEuclidComponent;
  let fixture: ComponentFixture<ConfirmationEuclidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationEuclidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationEuclidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
