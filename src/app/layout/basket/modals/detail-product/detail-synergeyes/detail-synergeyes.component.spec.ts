import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSynergeyesComponent } from './detail-synergeyes.component';

describe('DetailSynergeyesComponent', () => {
  let component: DetailSynergeyesComponent;
  let fixture: ComponentFixture<DetailSynergeyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSynergeyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSynergeyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
