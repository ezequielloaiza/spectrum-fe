import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMagicLookComponent } from './detail-magic-look.component';

describe('DetailMagicLookComponent', () => {
  let component: DetailMagicLookComponent;
  let fixture: ComponentFixture<DetailMagicLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMagicLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMagicLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
