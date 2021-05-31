import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StocksService } from './../../services/stocks.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  public selectStocks = [];
  enableBillPrice: boolean = false;
  priceErrorBanner: boolean = false; //Price Error Display Banner
  buyForm: FormGroup;

  get stocks() {
    return this.buyForm.get('stocks');
  }

  get quantity() {
    return this.buyForm.get('quantity');
  }

  get orderType() {
    return this.buyForm.get('orderType');
  }

  get price() {
    return this.buyForm.get('price');
  }

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
      this.enableBillPrice = true;
    } else {
      this.enableBillPrice = false;
    }
  }

  onPriceChange() {
    this.priceErrorBanner = false;
  }

  onSubmit() {
    if (
      this.buyForm.get('orderType').value === 'limit' &&
      this.buyForm.get('price').value === ''
    ) {
      this.priceErrorBanner = true;
      return null;
    }
    if (this.buyForm.valid) {
      alert('Product Added to your Portfolio!');
    } else {
      alert('Error!Try Again');
    }
    this.buyForm.reset();
  }
}
