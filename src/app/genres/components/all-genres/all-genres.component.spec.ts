import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGenresComponent } from './all-genres.component';

describe('AllGenresComponent', () => {
  let component: AllGenresComponent;
  let fixture: ComponentFixture<AllGenresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllGenresComponent]
    });
    fixture = TestBed.createComponent(AllGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
