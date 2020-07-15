import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConsultationFormComponent } from './detail-consultation-form.component';

describe('DetailConsultationFormComponent', () => {
  let component: DetailConsultationFormComponent;
  let fixture: ComponentFixture<DetailConsultationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailConsultationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConsultationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
