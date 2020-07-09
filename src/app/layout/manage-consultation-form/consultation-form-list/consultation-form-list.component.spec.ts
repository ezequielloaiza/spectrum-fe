import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationFormListComponent } from './consultation-form-list.component';

describe('ConsultationFormListComponent', () => {
  let component: ConsultationFormListComponent;
  let fixture: ComponentFixture<ConsultationFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
