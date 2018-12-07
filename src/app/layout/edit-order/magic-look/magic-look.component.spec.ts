import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicLookComponent } from './magic-look.component';

describe('MagicLookComponent', () => {
  let component: MagicLookComponent;
  let fixture: ComponentFixture<MagicLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
