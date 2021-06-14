import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stocksService } from './../../services/stocks/stocks.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  public selectStocks = [];
  displayPriceForLimitOrder: boolean = false; //Display Input field for Limit Order Price
  priceErrorBanner: boolean = false; //Price Error Display Banner
  systemUnavailable: boolean = false; //Display Server error
  sellForm: FormGroup;
  userName: string = localStorage.getItem('username');

  constructor(private fb: FormBuilder, private stock: stocksService) {}

  ngOnInit() {
    this.sellForm = this.fb.group({
      stocks: ['select-stock', Validators.required],
      quantity: ['', Validators.required],
      orderType: ['select', Validators.required],
      price: [''],
    });
    this.stock.getStocks().subscribe((data) => (this.selectStocks = data));
  }

  onOrderTypeChange() {
    if (this.sellForm.get('orderType').value === 'limit') {
      this.displayPriceForLimitOrder = true;
    } else {
      this.displayPriceForLimitOrder = false;
    }
  }

  onPriceChange() {
    this.priceErrorBanner = false;
  }

  onSellOrderSubmit() {
    if (
      this.sellForm.get('orderType').value === 'limit' &&
      this.sellForm.get('price').value === ''
    ) {
      this.priceErrorBanner = true;
      return null;
    }

    let stockDetail = this.sellForm.get('stocks').value;
    let stockTikker = stockDetail.slice(0, 3);
    let stockName = stockDetail.substring(
      stockDetail.lastIndexOf('.') + 1,
      stockDetail.lastIndexOf('-')
    );
    let currentMarketPrice = stockDetail.slice(stockDetail.length - 3);
    let limitOrderPrice = currentMarketPrice;
    if (this.sellForm.get('orderType').value === 'limit') {
      limitOrderPrice = this.sellForm.get('price').value;
    }
    let sellOrderRequest = {
      userName: this.userName,
      productName: stockName,
      productID: stockTikker,
      productType: 'STOCK',
      subcategory: 'STOCK',
      buyPrice: limitOrderPrice,
      marketPrice: currentMarketPrice,
      quantity: this.sellForm.get('quantity').value,
    };
    this.stock.sellStockOrder(sellOrderRequest).subscribe(
      (res) => {
        this.sellForm.reset();
      },
      (err) => {
        this.systemUnavailable = true;
      }
    );
  }
}
