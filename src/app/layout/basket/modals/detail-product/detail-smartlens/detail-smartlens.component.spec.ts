import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSmartlensComponent } from './detail-smartlens.component';

describe('DetailSmartlensComponent', () => {
  let component: DetailSmartlensComponent;
  let fixture: ComponentFixture<DetailSmartlensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSmartlensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSmartlensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
