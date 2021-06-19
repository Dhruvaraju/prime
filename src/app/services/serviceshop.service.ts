import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceShopService {
  baseUrl: string = 'https://ipotrading.herokuapp.com/';
  constructor(private http: HttpClient) {}

  /**
   * To get list of financial product from service.
   * @returns FInancial products list
   */
  fetchFinancialProductList(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'fpshop/catalog');
  }

  /**
   * To buy a financial product.
   * @param productInformation
   * @returns message
   */
  buyFinancialProduct(productInformation: any): Observable<any> {
    return this.http.post<any>(
      this.baseUrl + 'fpshop/buy/',
      productInformation
    );
  }
}
