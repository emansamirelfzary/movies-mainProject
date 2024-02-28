import { ComponentFixture, TestBed } from '@angular/core/testing';

import { moviesComponent } from './movies.component';

describe('PopularMoviesComponent', () => {
  let component:moviesComponent;
  let fixture: ComponentFixture<moviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [moviesComponent]
    });
    fixture = TestBed.createComponent(moviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
