import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDBdetailsComponent } from './edit-dbdetails.component';

describe('EditDBdetailsComponent', () => {
  let component: EditDBdetailsComponent;
  let fixture: ComponentFixture<EditDBdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDBdetailsComponent]
    });
    fixture = TestBed.createComponent(EditDBdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
