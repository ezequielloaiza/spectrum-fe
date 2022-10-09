import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGenerateOrderComponent } from './modify-generate-order.component';

describe('ModifyGenerateOrderComponent', () => {
  let component: ModifyGenerateOrderComponent;
  let fixture: ComponentFixture<ModifyGenerateOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyGenerateOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyGenerateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
