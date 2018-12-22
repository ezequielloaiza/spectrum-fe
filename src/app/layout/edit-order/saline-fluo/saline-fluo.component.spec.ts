import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalineFluoComponent } from './saline-fluo.component';

describe('SalineFluoComponent', () => {
  let component: SalineFluoComponent;
  let fixture: ComponentFixture<SalineFluoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalineFluoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalineFluoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
