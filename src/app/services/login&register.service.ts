import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
export class formSubmitService{
    constructor(private http:HttpClient){}
    url:string="https://prime-banc.herokuapp.com/";
    
    onFormSubmit(formData:any) : Observable<any>{
        return this.http.post<any>(this.url+'user/',formData)
    }
    onLoginAttempt(loginaccept:any): Observable<any>{
        return this.http.post<any>(this.url+'user/authenticate',loginaccept)

    }


}


