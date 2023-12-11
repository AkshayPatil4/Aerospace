import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class SpectrumService {
  private apiUrl =
    'https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus';
  private wsUrl =
    'wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS';

  constructor(private http: HttpClient) {}

  getSpectrumStatus(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getLiveSpectrumData(): Observable<any> {
    return webSocket(this.wsUrl);
  }
}
