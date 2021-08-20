import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldedLensesComponent } from './molded-lenses.component';

describe('MoldedLensesComponent', () => {
  let component: MoldedLensesComponent;
  let fixture: ComponentFixture<MoldedLensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoldedLensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldedLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
