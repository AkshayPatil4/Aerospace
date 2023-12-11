import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumDashboardComponent } from './spectrum-dashboard.component';

describe('SpectrumDashboardComponent', () => {
  let component: SpectrumDashboardComponent;
  let fixture: ComponentFixture<SpectrumDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpectrumDashboardComponent]
    });
    fixture = TestBed.createComponent(SpectrumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
