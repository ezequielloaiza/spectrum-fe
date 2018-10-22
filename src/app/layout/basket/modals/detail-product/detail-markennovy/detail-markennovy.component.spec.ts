import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMarkennovyComponent } from './detail-markennovy.component';

describe('DetailMarkennovyComponent', () => {
  let component: DetailMarkennovyComponent;
  let fixture: ComponentFixture<DetailMarkennovyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMarkennovyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMarkennovyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
