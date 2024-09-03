import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AltitudeVelocityChartComponent } from './components/altitude-velocity-chart/altitude-velocity-chart.component';
import { FuelOxidizerLevelsComponent } from './components/fuel-oxidizer-levels/fuel-oxidizer-levels.component';
import { AiInsightsComponent } from './components/ai-insights/ai-insights.component';
import { EngineThrustTemperatureComponent } from './components/engine-thrust-temperature/engine-thrust-temperature.component';
import { ExternalConditionsComponent } from './components/external-conditions/external-conditions.component';
import { AttitudeVisualizationComponent } from './components/attitude-visualization/attitude-visualization.component';
import { TrajectoryMapComponent } from './components/trajectory-map/trajectory-map.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AltitudeVelocityChartComponent,
    FuelOxidizerLevelsComponent,
    AiInsightsComponent,
    EngineThrustTemperatureComponent,
    ExternalConditionsComponent,
    AttitudeVisualizationComponent,
    TrajectoryMapComponent,
    ControlPanelComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
