import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTelemetryData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/telemetry`);
  }

  startSimulation(): Observable<any> {
    return this.http.post(`${this.apiUrl}/simulation/start`, {});
  }

  stopSimulation(): Observable<any> {
    return this.http.post(`${this.apiUrl}/simulation/stop`, {});
  }
}
