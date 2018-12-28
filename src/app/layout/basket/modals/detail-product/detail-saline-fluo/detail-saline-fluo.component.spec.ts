import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalineFluoComponent } from './detail-saline-fluo.component';

describe('DetailSalineFluoComponent', () => {
  let component: DetailSalineFluoComponent;
  let fixture: ComponentFixture<DetailSalineFluoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSalineFluoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSalineFluoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
