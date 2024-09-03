import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeVelocityChartComponent } from './altitude-velocity-chart.component';

describe('AltitudeVelocityChartComponent', () => {
  let component: AltitudeVelocityChartComponent;
  let fixture: ComponentFixture<AltitudeVelocityChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltitudeVelocityChartComponent]
    });
    fixture = TestBed.createComponent(AltitudeVelocityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
