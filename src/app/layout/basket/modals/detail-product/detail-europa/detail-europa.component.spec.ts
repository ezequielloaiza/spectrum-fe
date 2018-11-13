import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEuropaComponent } from './detail-europa.component';

describe('DetailEuropaComponent', () => {
  let component: DetailEuropaComponent;
  let fixture: ComponentFixture<DetailEuropaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEuropaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
