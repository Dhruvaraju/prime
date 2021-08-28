import { Component, OnInit } from '@angular/core';
import {InternalServices} from '../services/investments/internal.service';

@Component({
  selector: 'app-buynsell',
  templateUrl: './buynsell.component.html',
  styleUrls: ['./buynsell.component.css'],
})
export class BuynsellComponent implements OnInit {
  stockList: any;
  displayBuy: boolean = false;
  displaySell: boolean = false;
  username: string = localStorage.getItem('username');

  constructor(private productService: InternalServices) {}

  ngOnInit() {
    this.fetchPortfolio();
  }

  fetchPortfolio() {
    this.productService.productsOwnedByUser(this.username).subscribe(
      (res) => {
        this.stockList = res.filter(
          (product) => product.productType === 'STOCK'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
