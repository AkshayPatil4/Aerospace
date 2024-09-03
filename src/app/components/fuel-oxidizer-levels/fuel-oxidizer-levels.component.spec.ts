import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelOxidizerLevelsComponent } from './fuel-oxidizer-levels.component';

describe('FuelOxidizerLevelsComponent', () => {
  let component: FuelOxidizerLevelsComponent;
  let fixture: ComponentFixture<FuelOxidizerLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelOxidizerLevelsComponent]
    });
    fixture = TestBed.createComponent(FuelOxidizerLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
