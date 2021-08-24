import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stocksService } from './../../services/stocks/stocks.service';

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
  // @Output() returnEvent = new EventEmitter<string>();
  // @Output() returnToPortfolio = new EventEmitter();

  constructor(private fb: FormBuilder, private stock: stocksService) {}

  ngOnInit() {
    this.buyForm = this.fb.group({
      stocks: ['select-stock', Validators.required],
      quantity: ['', Validators.required],
      orderType: ['Select', Validators.required],
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
    let stockTikker = stockDetail.slice(0, 3);
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
      productID: stockTikker,
      productType: 'STOCK',
      subcategory: 'STOCK',
      buyPrice: limitOrderPrice,
      marketPrice: currentMarketPrice,
      quantity: this.buyForm.get('quantity').value,
    };
    this.stock.buyStockOrder(buyOrderRequest).subscribe(
      (res) => {
        this.successBanner = true;
        this.buyForm.reset();
        this.fetchPortfolio();
        // this.returnEvent.emit('buy-sucess');
      },
      (err) => {
        this.systemUnavailable = true;
      }
    );
  }
}
