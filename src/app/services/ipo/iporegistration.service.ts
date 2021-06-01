import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IporegistrationService {

_url='https://prime-banc.herokuapp.com/ipo/register';
  constructor(private _http:HttpClient) {}
   
  register(userdata) :Observable<any>
  {
    return this._http.post<any>(this._url,userdata);
  }
}
