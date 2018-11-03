import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEuclidComponent } from './detail-euclid.component';

describe('DetailEuclidComponent', () => {
  let component: DetailEuclidComponent;
  let fixture: ComponentFixture<DetailEuclidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEuclidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEuclidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
