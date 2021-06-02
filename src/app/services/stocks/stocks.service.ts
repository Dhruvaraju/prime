import { IStocks } from '../../../assets/stocks/stocks';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private _url: string = "/assets/stocks/stocks.json";

  constructor( private http: HttpClient ) { }

  getStocks(): Observable<IStocks[]>{
    return this.http.get<IStocks[]>(this._url);
  }
}
