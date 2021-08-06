import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl: string = 'https://ipotrading.herokuapp.com/';
  contactURL: string = 'https://prime-banc.herokuapp.com/contact/newMsg';

  constructor(private http: HttpClient) {}

  getStockAndFpDetails(username: String): Observable<any> {
    return this.http.get(this.baseUrl + 'bns/findByUName/' + username);
  }

  getIpoDetails(username: String): Observable<any> {
    return this.http.get(this.baseUrl + 'findIpo/' + username);
  }
  mutualRegister(username: String): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'mutual fund/register' + username);
  }

  addMessageFromContact(detail: any): Observable<any>{
    return this.http.post(this.contactURL,detail);
  }
}
