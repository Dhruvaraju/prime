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
  constructor(private transactionService:stocksService) {}

  ngOnInit(): void {
    this.transactionService.getStocksOwnedByUser('alexjames').subscribe(
      (res) => {
        this.stockList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
