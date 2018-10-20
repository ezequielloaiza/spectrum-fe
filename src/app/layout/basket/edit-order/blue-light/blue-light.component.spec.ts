import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueLightComponent } from './blue-light.component';

describe('BlueLightComponent', () => {
  let component: BlueLightComponent;
  let fixture: ComponentFixture<BlueLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
