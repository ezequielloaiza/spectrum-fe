import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenticonComponent } from './lenticon.component';

describe('LenticonComponent', () => {
  let component: LenticonComponent;
  let fixture: ComponentFixture<LenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
