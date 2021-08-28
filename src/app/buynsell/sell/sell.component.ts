import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InternalServices } from '../../services/investments/internal.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  stockList: any;
  public selectStocks = [];
  stockUnavailable: boolean = false;
  responseMessage: any;
  displayPriceForLimitOrder: boolean = false; //Display Input field for Limit Order Price
  priceErrorBanner: boolean = false; //Price Error Display Banner
  systemUnavailable: boolean = false; //Display Server error
  successBanner: boolean = false; //Display success banner on transaction complete
  sellForm: FormGroup;
  userName: string = localStorage.getItem('username');

  constructor(
    private formBuilder: FormBuilder,
    private productService: InternalServices
  ) {}

  ngOnInit() {
    this.sellForm = this.formBuilder.group({
      stocks: ['select-stock', Validators.required],
      quantity: ['', Validators.required],
      orderType: ['select', Validators.required],
      price: [''],
    });
    this.fetchPortfolio();
  }

  fetchPortfolio() {
    this.productService.productsOwnedByUser(this.userName).subscribe(
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
    this.successBanner = false;
    this.stockUnavailable = false;
    this.systemUnavailable = false;
    if (
      this.sellForm.get('orderType').value === 'limit' &&
      this.sellForm.get('price').value === ''
    ) {
      this.priceErrorBanner = true;
      return null;
    }

    let stockDetail = this.sellForm.get('stocks').value;
    let stockTicker = stockDetail.slice(0, 3);
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
      productID: stockTicker,
      productType: 'STOCK',
      subcategory: 'STOCK',
      buyPrice: limitOrderPrice,
      marketPrice: currentMarketPrice,
      quantity: this.sellForm.get('quantity').value,
    };
    this.productService.sellProduct(sellOrderRequest).subscribe(
      (res) => {
        if (res.status === 'UPDATED') {
          this.successBanner = true;
          this.stockUnavailable = false;
        } else {
          this.stockUnavailable = true;
        }
        this.sellForm.reset();
        this.fetchPortfolio();
      },
      (err) => {
        this.systemUnavailable = true;
      }
    );
  }
}
