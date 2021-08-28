import { Component, OnInit } from '@angular/core';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  productList: any;
  pageLoader: boolean = true;
  getProductsFailed: boolean = false;
  stockList: any;
  financialProductList: any;
  ipoList: any;
  mutualFundList: any;
  userName: String = localStorage.getItem('username');
  totalStockPrice: number = 0;
  totalFpPrice: number = 0;
  mutualFundsInvestedIn: number = 0;
  todayDate;
  userFrom;
  lastLoginDate;
  stockPercent;
  financialProductPercent;
  totalMutualFundInvestedAmount = 0;
  openIpos: number = 0;

  constructor(private invService: InternalServices) {}

  ngOnInit(): void {
    this.todayDate = Date.now();
    this.userFrom = localStorage.getItem('registeredDate');
    this.lastLoginDate = localStorage.getItem('lastLogin');
    this.invService.productsOwnedByUser(this.userName).subscribe(
      (res) => {
        this.pageLoader = false;
        this.stockList = res.filter(
          (product) => product.productType === 'STOCK'
        );
        this.financialProductList = res.filter(
          (product) => product.productType === 'FP'
        );

        if (this.stockList != null && this.stockList != undefined) {
          this.stockList.forEach((element) => {
            this.totalStockPrice =
              this.totalStockPrice + element.quantity * element.marketPrice;
          });
        }
        if (
          this.financialProductList != null &&
          this.financialProductList != undefined
        ) {
          this.financialProductList.forEach((element) => {
            this.totalFpPrice = this.totalFpPrice + element.marketPrice;
          });
        }
        this.stockPercent =
          (this.totalStockPrice / (this.totalStockPrice + this.totalFpPrice)) *
          100;
        this.financialProductPercent =
          (this.totalFpPrice / (this.totalStockPrice + this.totalFpPrice)) *
          100;
      },
      (err) => {
        this.pageLoader = false;
        this.getProductsFailed = true;
      }
    );
    this.invService.ipoOwnedByUser(this.userName).subscribe((res) => {
      this.ipoList = res;
    });

    this.invService.mutualFundsOwnedByUser(this.userName).subscribe((res) => {
      this.mutualFundList = res;
      this.mutualFundsInvestedIn = res.length;
      this.mutualFundList.forEach(
        (fund) =>
          (this.totalMutualFundInvestedAmount =
            this.totalMutualFundInvestedAmount + fund.maturityAmount)
      );
    });

    this.invService.fetchOpenIPoInformation().subscribe(res => {
      this.openIpos = res.length;
    })
  }
}
