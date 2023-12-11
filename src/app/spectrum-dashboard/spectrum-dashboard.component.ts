import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpectrumService } from './spectrum.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-spectrum-dashboard',
  templateUrl: './spectrum-dashboard.component.html',
  styleUrls: ['./spectrum-dashboard.component.css'],
})
export class SpectrumDashboardComponent implements OnInit {
  spectrumData: any = {};
  rocketImageUrl = '../assets/isar_logo.avif';
  liveStream = false;
  private wsSubscription: Subscription | undefined;

  constructor(
    private spectrumService: SpectrumService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadSpectrumStatus();
  }

  loadSpectrumStatus(): void {
    // Unsubscribe from previous WebSocket subscription
    if (this.wsSubscription) {
      this.wsSubscription.unsubscribe();
    }

    const dataObservable = this.liveStream
      ? this.spectrumService.getLiveSpectrumData()
      : this.spectrumService.getSpectrumStatus();

    this.wsSubscription = dataObservable.subscribe(
      (data) => {
        if (!this.spectrumData) {
          this.spectrumData = {};
        }

        // Handle WebSocket data structure
        if (data.Velocity !== undefined) {
          this.zone.run(() => {
            this.spectrumData.velocity = data.Velocity;
            this.spectrumData.altitude = data.Altitude;
            this.spectrumData.temperature = data.Temperature;
            this.spectrumData.status = data.StatusMessage;
            this.spectrumData.ascending = !data.IsAscending; // Reverse logic for IsAscending
            this.spectrumData.actionRequired = data.IsActionRequired;
          });
        } else {
          // Handle REST API data structure
          this.zone.run(() => {
            this.spectrumData.velocity = data.velocity;
            this.spectrumData.altitude = data.altitude;
            this.spectrumData.temperature = data.temperature;
            this.spectrumData.status = data.statusMessage;
            this.spectrumData.ascending = data.isAscending;
            this.spectrumData.actionRequired = data.isActionRequired;
          });
        }

        // Manually trigger change detection
        this.cdr.detectChanges();

        // Check if action is required
        if (this.spectrumData.actionRequired) {
          this.showActionRequiredNotification(); // Show notification if action is required
        }
      },
      (error) => {
        console.error('Data loading error:', error);
      }
    );
  }

  toggleApiMode(): void {
    this.liveStream = !this.liveStream;
    this.loadSpectrumStatus();

    const dataSource = this.liveStream
      ? 'Data is being live streamed'
      : 'Switched to Rest API Data';

    this.snackBar.open(dataSource, undefined, {
      duration: 3000, // Adjust the duration as needed
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  actOnSpectrum(): void {
    window.location.href =
      'https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum';
  }

  // Method to show notification
  private showActionRequiredNotification(): void {
    const snackBarRef = this.snackBar.open(
      'Alert: Action is required',
      'Act on Spectrum',
      {
        duration: 4000, // Duration in milliseconds
        verticalPosition: 'top',
      }
    );

    // Handle action on the snackbar button
    snackBarRef.onAction().subscribe(() => {
      this.actOnSpectrum(); // Trigger the action when the user clicks the "Act on Spectrum" button
    });
  }

  updateData(): void {
    this.loadSpectrumStatus();
  }
}
