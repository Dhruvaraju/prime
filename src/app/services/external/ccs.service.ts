import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CcsService {
  environment: String = 'PROD';
  localServerUrl: String = 'http://localhost:8080/api/v1/ticket/';
  prodServerUrl: String = 'https://sahaya-cs.herokuapp.com/api/v1/ticket/';
  serverUrl: String;

  constructor(private http: HttpClient) {
    if (this.environment === 'DEV') {
      this.serverUrl = this.localServerUrl;
    } else {
      this.serverUrl = this.prodServerUrl;
    }
  }

  registerTicket(ticketDetail: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'register', ticketDetail);
  }

  ticketsOwned(userName: string): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'user/' + userName);
  }
}
