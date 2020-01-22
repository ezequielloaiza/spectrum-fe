import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynergeyesComponent } from './synergeyes.component';

describe('SynergeyesComponent', () => {
  let component: SynergeyesComponent;
  let fixture: ComponentFixture<SynergeyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynergeyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynergeyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
