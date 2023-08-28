import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalOverviewComponent } from './capital-overview.component';

describe('CapitalOverviewComponent', () => {
  let component: CapitalOverviewComponent;
  let fixture: ComponentFixture<CapitalOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitalOverviewComponent]
    });
    fixture = TestBed.createComponent(CapitalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
