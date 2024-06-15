import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydetailswithidComponent } from './displaydetailswithid.component';

describe('DisplaydetailswithidComponent', () => {
  let component: DisplaydetailswithidComponent;
  let fixture: ComponentFixture<DisplaydetailswithidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaydetailswithidComponent]
    });
    fixture = TestBed.createComponent(DisplaydetailswithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
