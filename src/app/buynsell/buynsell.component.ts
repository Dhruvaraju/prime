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
  onClickButton: boolean = false;
  displayHome: boolean = true;
  username: string = localStorage.getItem('username');
  constructor(private transactionService: stocksService) {}

  viewTable() {
    this.onClickButton = true;    
    this.displayHome = false;
  }

  home() {
    this.displayHome = true;   
    this.onClickButton = false; 
  }

  ngOnInit(): void {
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
}
