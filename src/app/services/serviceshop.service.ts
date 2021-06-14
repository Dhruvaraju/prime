import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceshopService {

  constructor(private http:HttpClient) { }
  url:string="https://ipotrading.herokuapp.com/fpshop/buy";

  wealth(productdata) :Observable<any>
  {
    return this.http.post<any>(this.url,productdata);
  }

  income(formdata) :Observable<any>
  {
    return this.http.post<any>(this.url,formdata);
  }

}
 