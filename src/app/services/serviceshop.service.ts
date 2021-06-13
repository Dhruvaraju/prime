import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceshopService {

  constructor(private http:HttpClient) { }
  url:string="https://prime-banc.herokuapp.com/";

  wealth(productdata) :Observable<any>
  {
    return this.http.post<any>(this.url,productdata);
  }

}
 