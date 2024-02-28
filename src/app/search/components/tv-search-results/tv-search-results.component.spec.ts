import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSearchResultsComponent } from './tv-search-results.component';

describe('TvSearchResultsComponent', () => {
  let component: TvSearchResultsComponent;
  let fixture: ComponentFixture<TvSearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvSearchResultsComponent]
    });
    fixture = TestBed.createComponent(TvSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
