import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMovieCreditsComponent } from './person-movie-credits.component';

describe('PersonMovieCreditsComponent', () => {
  let component: PersonMovieCreditsComponent;
  let fixture: ComponentFixture<PersonMovieCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonMovieCreditsComponent]
    });
    fixture = TestBed.createComponent(PersonMovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
