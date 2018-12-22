import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLenticonComponent } from './detail-lenticon.component';

describe('DetailLenticonComponent', () => {
  let component: DetailLenticonComponent;
  let fixture: ComponentFixture<DetailLenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
