import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceshopService {
  url: string = 'https://ipotrading.herokuapp.com/';
  constructor(private http: HttpClient) {}

  wealth(wealthdata: any): Observable<any> {
    return this.http.post<any>(this.url + 'fpshop/buy/', wealthdata);
  }

  income(formdata): Observable<any> {
    return this.http.post<any>(this.url + 'fpshop/buy/', formdata);
  }
}
