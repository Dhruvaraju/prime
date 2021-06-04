import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
export class formSubmitService{
    constructor(private http:HttpClient){}
    url:string="https://ipotrading.herokuapp.com/";
    
    onFormSubmit(formData:any) : Observable<any>{
        return this.http.post<any>(this.url+'register',formData)
    }
    onLoginAttempt(loginaccept:any): Observable<any>{
        return this.http.post<any>(this.url+'user/login',loginaccept)

    }


}


