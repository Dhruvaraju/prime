import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stocksService } from './../../services/stocks/stocks.service';

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
  // @Output() returnEvent = new EventEmitter<string>();
  // @Output() returnToPortfolio = new EventEmitter();

  constructor(private fb: FormBuilder, private stock: stocksService) {}

  ngOnInit() {
    this.sellForm = this.fb.group({
      stocks: ['select-stock', Validators.required],
      quantity: ['', Validators.required],
      orderType: ['select', Validators.required],
      price: [''],
    });
    this.stock.fetchStocks().subscribe((data) => (this.selectStocks = data));
    this.fetchPortfolio();
  }

  fetchPortfolio() {
    this.stock.getStocksOwnedByUser(this.userName).subscribe(
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

  // scrollToPortfolio() {
  //   this.returnToPortfolio.emit();
  // }

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
    this.stockUnavailable= false;
    this.systemUnavailable = false;
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
        this.responseMessage = res.message;
        if (this.responseMessage ==="Product Initiated For Sale") {
          this.successBanner = true;
          this.stockUnavailable = false;
          // this.returnEvent.emit('sell-sucess');
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
