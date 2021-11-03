import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlensComponent } from './smartlens.component';

describe('SmartlensComponent', () => {
  let component: SmartlensComponent;
  let fixture: ComponentFixture<SmartlensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartlensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartlensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
