import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchResultsComponent } from './movies-search-results.component';

describe('MoviesSearchResultsComponent', () => {
  let component: MoviesSearchResultsComponent;
  let fixture: ComponentFixture<MoviesSearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSearchResultsComponent]
    });
    fixture = TestBed.createComponent(MoviesSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
