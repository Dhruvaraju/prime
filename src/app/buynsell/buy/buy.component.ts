import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StocksService } from './../../services/stocks/stocks.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  public selectStocks = [];
  displayPriceForLimitOrder: boolean = false; //Display Input field for Limit Order Price
  priceErrorBanner: boolean = false; //Price Error Display Banner
  systemUnavailable: boolean = false; //Display Server error
  onSuccessBanner: boolean = false; //Display Success Banner on Submit
  buyForm: FormGroup;

  constructor(private fb: FormBuilder, private stock: StocksService) {}

  ngOnInit() {
    this.buyForm = this.fb.group({
      stocks: ['select-stock', Validators.required],
      quantity: ['', Validators.required],
      orderType: ['Select', Validators.required],
      price: [''],
    });
    this.stock.getStocks().subscribe((data) => (this.selectStocks = data));
  }

  onOrderTypeChange() {
    if (this.buyForm.get('orderType').value === 'limit') {
      this.displayPriceForLimitOrder = true;
    } else {
      this.displayPriceForLimitOrder = false;
    }
  }

  onPriceChange() {
    this.priceErrorBanner = false;
  }

  onBuyFormSubmit() {
    if (
      this.buyForm.get('orderType').value === 'limit' &&
      this.buyForm.get('price').value === ''
    ) {
      this.priceErrorBanner = true;
      return null;
    }

    let stockDetail = this.buyForm.get('stocks').value;
    let currentMarketPrice = stockDetail.slice(stockDetail.length - 3);
    let stockTikker = stockDetail.slice(0,3);
    let limitOrderPrice = currentMarketPrice;
    if (this.buyForm.get('orderType').value === 'limit') {
      limitOrderPrice = this.buyForm.get('price').value;
    }
    let buyOrderRequest = {
      userName: 'Alan',
      productName: this.buyForm.get('stocks').value,
      productID: stockTikker,
      productType: 'STOCK',
      subcategory: 'STOCK',
      buyPrice: limitOrderPrice,
      marketPrice: currentMarketPrice,
      quantity: this.buyForm.get('quantity').value,
    };
    this.stock.buyStockOrder(buyOrderRequest).subscribe(
      (res) => {
        this.buyForm.reset();
      },
      (err) => {
        this.systemUnavailable = true;
      }
    );
  }
}
