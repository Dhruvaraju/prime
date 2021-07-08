import { Component, OnInit } from '@angular/core';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { stocksService } from './../services/stocks/stocks.service';

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

  constructor(private transactionService: stocksService) {}

  ngOnInit() {
    this.fetchPortfolio();
  }

  fetchPortfolio() {
    this.transactionService.getStocksOwnedByUser(this.username).subscribe(
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

  scroll(el: HTMLElement, detail) {
    if (detail === 'buy') {
      this.displayBuy = true;
      this.displaySell = false;
    } else {
      this.displayBuy = false;
      this.displaySell = true;
    }
    setTimeout(function () {
      el.scrollIntoView();
    }, 100);
  }

  retriggerService($event) {
    console.log($event)
    this.ngOnInit();
  }

  scrollUp(pf: HTMLElement) {
    setTimeout(function () {
      pf.scrollIntoView();
    }, 100);
  }
}
