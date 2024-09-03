import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket(`${environment.apiUrl.replace('/api', '')}/ws`);
  }

  getTelemetryUpdates(): Observable<any> {
    return this.socket$;
  }

  sendMessage(msg: any): void {
    this.socket$.next(msg);
  }

  closeConnection(): void {
    this.socket$.complete();
  }
}
