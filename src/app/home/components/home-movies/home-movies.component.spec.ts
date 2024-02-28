import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homeMoviesComponent } from './home-movies.component';

describe('ComponentsComponent', () => {
  let component: homeMoviesComponent;
  let fixture: ComponentFixture<homeMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [homeMoviesComponent]
    });
    fixture = TestBed.createComponent(homeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
