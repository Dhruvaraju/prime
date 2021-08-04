import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MutualFundregistrationService {

  constructor(private _http:HttpClient) {}
  _url :string="https://ipotrading.herokuapp.com/";
  register(mutualregdetail:any) :Observable<any>{
    return this._http.post<any>(this._url+'mutual fund/register',mutualregdetail);
}
}
