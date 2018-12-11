import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkennovyComponent } from './markennovy.component';

describe('MarkennovyComponent', () => {
  let component: MarkennovyComponent;
  let fixture: ComponentFixture<MarkennovyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkennovyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkennovyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
