import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuclidComponent } from './euclid.component';

describe('EuclidComponent', () => {
  let component: EuclidComponent;
  let fixture: ComponentFixture<EuclidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuclidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuclidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
