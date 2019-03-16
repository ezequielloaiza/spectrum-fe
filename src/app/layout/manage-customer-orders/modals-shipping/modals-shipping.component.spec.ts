import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsShippingComponent } from './modals-shipping.component';

describe('ModalsShippingComponent', () => {
  let component: ModalsShippingComponent;
  let fixture: ComponentFixture<ModalsShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
