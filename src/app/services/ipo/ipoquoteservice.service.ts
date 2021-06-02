import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpoquoteDetails } from 'src/assets/ipo-images/quote';

@Injectable({
  providedIn: 'root'
})
export class IpoquoteserviceService {

  constructor(private http: HttpClient) {   }
  private _url :string="/assets/ipo-images/quote.json";
  getfeatures(): Observable<IpoquoteDetails[]>{
    return this.http.get<IpoquoteDetails[]>(this._url)
}
}