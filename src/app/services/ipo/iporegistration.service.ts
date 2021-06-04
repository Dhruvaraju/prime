import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IporegistrationService {

  constructor(private _http:HttpClient) {}
  _url :string="https://ipotrading.herokuapp.com/";
  register(iporegdetail:any) :Observable<any>{
    return this._http.post<any>(this._url+'ipo/register',iporegdetail)
}
}
