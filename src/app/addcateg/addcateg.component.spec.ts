import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategComponent } from './addcateg.component';

describe('AddcategComponent', () => {
  let component: AddcategComponent;
  let fixture: ComponentFixture<AddcategComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcategComponent]
    });
    fixture = TestBed.createComponent(AddcategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
