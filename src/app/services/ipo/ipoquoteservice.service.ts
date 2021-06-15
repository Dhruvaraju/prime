import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IpoquoteserviceService {

  constructor(private http: HttpClient) {   }
  private _url :string="https://ipotrading.herokuapp.com/";  
  getfeatures(userName: string): Observable<any>{
    return this.http.get<any>(this._url+'findIpo/'+ userName);
}
  }