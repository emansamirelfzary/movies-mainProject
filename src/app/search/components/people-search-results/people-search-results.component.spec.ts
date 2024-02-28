import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchResultsComponent } from './people-search-results.component';

describe('PeopleSearchResultsComponent', () => {
  let component: PeopleSearchResultsComponent;
  let fixture: ComponentFixture<PeopleSearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleSearchResultsComponent]
    });
    fixture = TestBed.createComponent(PeopleSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
