import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyModalComponent } from './warranty-modal.component';

describe('WarrantyModalComponent', () => {
  let component: WarrantyModalComponent;
  let fixture: ComponentFixture<WarrantyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
