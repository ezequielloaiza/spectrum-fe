import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductEuropaComponent } from './edit-product-europa.component';

describe('EditProductEuropaComponent', () => {
  let component: EditProductEuropaComponent;
  let fixture: ComponentFixture<EditProductEuropaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductEuropaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
