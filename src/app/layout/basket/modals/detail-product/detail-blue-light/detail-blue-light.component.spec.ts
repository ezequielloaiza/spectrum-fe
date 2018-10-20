import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlueLightComponent } from './detail-blue-light.component';

describe('DetailBlueLightComponent', () => {
  let component: DetailBlueLightComponent;
  let fixture: ComponentFixture<DetailBlueLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBlueLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBlueLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
