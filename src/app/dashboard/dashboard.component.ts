import { DashboardService } from './../services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';


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
  mutualfund : any;
  userName: String = localStorage.getItem('username');
  totalStockPrice: number = 0;
  totalFpPrice: number = 0;
  todayDate;
  stockPercent;
  fpPercent;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.todayDate= Date.now();
    this.dashboardService.getStockAndFpDetails(this.userName).subscribe(
      (res) => {
        this.pageLoader = false;
        this.stockList = res.filter(
          (product) => product.productType === 'STOCK'
        );
        this.financialProductList = res.filter(
          (product) => product.productType === 'FP'
        );

        if(this.stockList != null && this.stockList != undefined){
          this.stockList.forEach(element => {
            this.totalStockPrice = this.totalStockPrice + (element.quantity * element.marketPrice)
          });
        }
        if(this.financialProductList != null && this.financialProductList != undefined){
          this.financialProductList.forEach(element => {
            this.totalFpPrice = this.totalFpPrice +  element.marketPrice
          });
        }
        this.stockPercent = (this.totalStockPrice /(this.totalStockPrice + this.totalFpPrice )) * 100
        this.fpPercent = (this.totalFpPrice /(this.totalStockPrice + this.totalFpPrice )) * 100
      },
      (err) => {
        this.pageLoader = false;
        this.getProductsFailed = true;
      }
    );
    this.dashboardService.getIpoDetails(this.userName).subscribe(
      res => {
        this.ipoList = res;
        console.log(res);
      }
    );
  
  this.dashboardService.mutualRegister(this.userName).subscribe(
     res =>{
         this.mutualfund= res;
     } 
  )
  
 }
}