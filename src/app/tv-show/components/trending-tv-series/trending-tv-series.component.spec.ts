import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTvSeriesComponent } from './trending-tv-series.component';

describe('TrendingTvSeriesComponent', () => {
  let component: TrendingTvSeriesComponent;
  let fixture: ComponentFixture<TrendingTvSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingTvSeriesComponent]
    });
    fixture = TestBed.createComponent(TrendingTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
