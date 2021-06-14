import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';

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
  }
}
