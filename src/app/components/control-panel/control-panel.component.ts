import { Component } from '@angular/core';
import { TelemetryService } from 'src/app/services/telemetry.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  constructor(private telemetryService: TelemetryService) {}

  startSimulation() {
    this.telemetryService.startSimulation().subscribe(response => {
      console.log('Simulation started:', response);
    });
  }

  stopSimulation() {
    this.telemetryService.stopSimulation().subscribe(response => {
      console.log('Simulation stopped:', response);
    });
  }

  resetSimulation() {
    // Implement reset logic if necessary
    console.log('Simulation reset.');
  }

}
