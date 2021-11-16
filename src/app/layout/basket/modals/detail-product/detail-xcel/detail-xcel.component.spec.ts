import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailXcelComponent } from './detail-xcel.component';

describe('DetailXcelComponent', () => {
  let component: DetailXcelComponent;
  let fixture: ComponentFixture<DetailXcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailXcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailXcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
