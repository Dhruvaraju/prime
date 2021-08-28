import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStocks } from '../../../assets/stocks/stocks';

@Injectable({
  providedIn: 'root',
})
export class InternalServices {
  environment: String = 'PROD';
  localServerUrl: String = 'http://localhost:8080/api/v1/';
  prodServerUrl: String = 'https://prime-services.herokuapp.com/api/v1/';
  private stocksJsonUrl: string = '/assets/stocks/stocks.json';
  serverUrl: String;

  constructor(private http: HttpClient) {
    if (this.environment === 'DEV') {
      this.serverUrl = this.localServerUrl;
    } else {
      this.serverUrl = this.prodServerUrl;
    }
  }

  registerUser(userDetail: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'register', userDetail);
  }

  authenticateUser(userDetail: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'authenticate', userDetail);
  }

  buyProduct(productInfo: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'products/buy', productInfo);
  }

  sellProduct(productInfo: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'products/sell', productInfo);
  }

  productsOwnedByUser(username: String): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'products/' + username);
  }

  registerMutualFund(mutualFundInfo: any): Observable<any> {
    return this.http.post<any>(
      this.serverUrl + 'mutual-fund/register',
      mutualFundInfo
    );
  }

  mutualFundsOwnedByUser(username: String): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'mutual-fund/' + username);
  }

  registerIpo(ipoInfo: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'ipo/register', ipoInfo);
  }

  ipoOwnedByUser(username: String): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'ipo/' + username);
  }

  registerMessage(messageInfo: any): Observable<any> {
    return this.http.post<any>(this.serverUrl + 'messages/register', messageInfo);
  }

  fetchAllMessages(): Observable<any> {
    return this.http.get<any>(this.serverUrl + 'messages');
  }

  fetchStockInformation(): Observable<IStocks[]> {
    return this.http.get<IStocks[]>(this.stocksJsonUrl);
  }

  fetchOpenIPoInformation():Observable<any>{
    return this.http.get<any>(this.serverUrl + 'ipo/open');
  }

  fetchFinancialProductList(): Observable<any>{
    return this.http.get<any>(this.serverUrl + 'products/catalog');
  }

}
