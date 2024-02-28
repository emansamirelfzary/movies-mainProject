import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonImgComponent } from './person-img.component';

describe('PersonImgComponent', () => {
  let component: PersonImgComponent;
  let fixture: ComponentFixture<PersonImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonImgComponent]
    });
    fixture = TestBed.createComponent(PersonImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
