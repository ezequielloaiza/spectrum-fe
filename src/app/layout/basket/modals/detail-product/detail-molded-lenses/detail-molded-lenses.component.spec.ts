import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMoldedLensesComponent } from './detail-molded-lenses.component';

describe('DetailMoldedLensesComponent', () => {
  let component: DetailMoldedLensesComponent;
  let fixture: ComponentFixture<DetailMoldedLensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMoldedLensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMoldedLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
