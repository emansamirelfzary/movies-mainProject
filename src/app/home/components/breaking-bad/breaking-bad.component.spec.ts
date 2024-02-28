import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingBadComponent } from './breaking-bad.component';

describe('BreakingBadComponent', () => {
  let component: BreakingBadComponent;
  let fixture: ComponentFixture<BreakingBadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakingBadComponent]
    });
    fixture = TestBed.createComponent(BreakingBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
