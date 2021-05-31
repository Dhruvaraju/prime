import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StocksService } from '../../services/stocks/stocks.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  public selectStocks = [];
  enableSellPrice: boolean = false;
  priceErrorBanner: boolean = false; //Price Error Display Banner
  systemUnavailable: boolean = false; //Display Server error
  sellForm: FormGroup;

  get getStocks() {
    return this.sellForm.get('stocks');
  }

  get getQuantity() {
    return this.sellForm.get('quantity');
  }

  get getOrderType() {
    return this.sellForm.get('orderType');
  }

  get getPrice() {
    return this.sellForm.get('price');
  }
  constructor(
    private fb: FormBuilder, 
    private stock: StocksService
    ) {}

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
      this.enableSellPrice = true;
    } else {
      this.enableSellPrice = false;
    }
  }

  onPriceChange() {
    this.priceErrorBanner = false;
  }

  onSubmit() {
    if (
      this.sellForm.get('orderType').value === 'limit' &&
      this.sellForm.get('price').value === ''
    ) {
      this.priceErrorBanner = true;
      return null;
    }
    if (this.sellForm.valid) {
      alert('Product Added to your Portfolio!');
    } else {
      alert('Error!Try Again');
    }
    this.sellForm.reset();
  
    let orderDetail = {
      stockName: this.sellForm.get('stocks').value,
      quantity: this.sellForm.get('quantity').value,
      orderType: this.sellForm.get('orderType').value,  
      price: this.sellForm.get('price').value
    };
    this.stock.sellStockOrder(orderDetail).subscribe(
      (res) => {
        if (res.status === 300) {
          alert('Order Successfull');
        } 
        else {
          alert('Invalid');
        }
      },
      (err) => {
        this.systemUnavailable = true;
      }
    );
  }
}