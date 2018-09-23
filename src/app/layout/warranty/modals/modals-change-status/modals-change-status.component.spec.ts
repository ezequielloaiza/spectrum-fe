import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsChangeStatusComponent } from './modals-change-status.component';

describe('ModalsChangeStatusComponent', () => {
  let component: ModalsChangeStatusComponent;
  let fixture: ComponentFixture<ModalsChangeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsChangeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
