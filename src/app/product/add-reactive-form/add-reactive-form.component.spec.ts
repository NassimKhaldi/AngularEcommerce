import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactiveFormComponent } from './add-reactive-form.component';

describe('AddReactiveFormComponent', () => {
  let component: AddReactiveFormComponent;
  let fixture: ComponentFixture<AddReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReactiveFormComponent]
    });
    fixture = TestBed.createComponent(AddReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
