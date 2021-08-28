import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InternalServices } from '../../services/investments/internal.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  stockList: any;
  public selectStocks = [];
  displayPriceForLimitOrder: boolean = false; //Display Input field for Limit Order Price
  priceErrorBanner: boolean = false; //Price Error Display Banner
  systemUnavailable: boolean = false; //Display Server error
  successBanner: boolean = false; //Display success banner on transaction complete
  buyForm: FormGroup;
  userName: string = localStorage.getItem('username');

  constructor(
    private formBuilder: FormBuilder,
    private productService: InternalServices
  ) {}

  ngOnInit() {
    this.buyForm = this.formBuilder.group({
      stocks: ['select-stock', Validators.required],
      quantity: ['', Validators.required],
      orderType: ['Select', Validators.required],
      price: [''],
    });
    this.productService
      .fetchStockInformation()
      .subscribe((data) => (this.selectStocks = data));
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
    this.successBanner = false;
    this.systemUnavailable = false;
    if (
      this.buyForm.get('orderType').value === 'limit' &&
      this.buyForm.get('price').value === ''
    ) {
      this.priceErrorBanner = true;
      return null;
    }
    let stockDetail = this.buyForm.get('stocks').value;
    let stockTicker = stockDetail.slice(0, 3);
    let stockName = stockDetail.substring(
      stockDetail.lastIndexOf('.') + 1,
      stockDetail.lastIndexOf('-')
    );
    let currentMarketPrice = stockDetail.slice(stockDetail.length - 3);
    let limitOrderPrice = currentMarketPrice;
    if (this.buyForm.get('orderType').value === 'limit') {
      limitOrderPrice = this.buyForm.get('price').value;
    }
    let buyOrderRequest = {
      userName: this.userName,
      productName: stockName,
      productID: stockTicker,
      productType: 'STOCK',
      subcategory: 'STOCK',
      buyPrice: limitOrderPrice,
      marketPrice: currentMarketPrice,
      quantity: this.buyForm.get('quantity').value,
    };
    this.productService.buyProduct(buyOrderRequest).subscribe(
      (res) => {
        this.successBanner = true;
        this.buyForm.reset();
        this.fetchPortfolio();
      },
      (err) => {
        this.systemUnavailable = true;
      }
    );
  }
}
