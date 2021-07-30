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

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getStockAndFpDetails(this.userName).subscribe(
      (res) => {
        this.pageLoader = false;
        this.stockList = res.filter(
          (product) => product.productType === 'STOCK'
        );
        this.financialProductList = res.filter(
          (product) => product.productType === 'FP'
        );
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
  
  /* this.dashboardService.mutualRegister(this.userName).subscribe(
     res =>{
         this.mutualfund= res;
     } */
  //)
 }
}