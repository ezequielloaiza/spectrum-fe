import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTypeModalComponent } from './business-type-modal.component';

describe('BusinessTypeModalComponent', () => {
  let component: BusinessTypeModalComponent;
  let fixture: ComponentFixture<BusinessTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
