import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalConditionsComponent } from './external-conditions.component';

describe('ExternalConditionsComponent', () => {
  let component: ExternalConditionsComponent;
  let fixture: ComponentFixture<ExternalConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalConditionsComponent]
    });
    fixture = TestBed.createComponent(ExternalConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
