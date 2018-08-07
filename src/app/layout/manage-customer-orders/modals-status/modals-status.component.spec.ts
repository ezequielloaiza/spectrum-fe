import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsStatusComponent } from './modals-status.component';

describe('ModalsStatusComponent', () => {
  let component: ModalsStatusComponent;
  let fixture: ComponentFixture<ModalsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
