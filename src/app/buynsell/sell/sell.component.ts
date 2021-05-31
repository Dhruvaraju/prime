import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StocksService } from './../../services/stocks.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  public selectStocks = [];
  enableSellPrice: boolean = false;
  priceErrorBanner: boolean = false; //Price Error Display Banner
  sellForm: FormGroup;

  get stocks() {
    return this.sellForm.get('stocks');
  }

  get quantity() {
    return this.sellForm.get('quantity');
  }

  get orderType() {
    return this.sellForm.get('orderType');
  }

  get price() {
    return this.sellForm.get('price');
  }
  constructor(private fb: FormBuilder, private stock: StocksService) {}

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
  }
}
