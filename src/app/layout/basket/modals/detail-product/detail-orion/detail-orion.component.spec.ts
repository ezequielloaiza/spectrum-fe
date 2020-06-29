import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrionComponent } from './detail-orion.component';

describe('DetailOrionComponent', () => {
  let component: DetailOrionComponent;
  let fixture: ComponentFixture<DetailOrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
