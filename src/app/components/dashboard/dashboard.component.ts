import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  notifications = [
    { message: 'Fuel level low' },
    { message: 'Engine temperature rising' },
    { message: 'Trajectory deviation detected' },
  ];
  toggleSidenav() {
    this.sidenav.toggle();
  }
  removeNotification(index: number) {
    this.notifications.splice(index, 1);
  }
}
