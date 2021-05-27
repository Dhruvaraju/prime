import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StocksService } from './../../services/stocks.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  submitted = false;
  public selectStocks = [];
  enableSellPrice: boolean = false;
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
  constructor( private fb: FormBuilder, 
               private stock: StocksService ) { }

  ngOnInit() {
    this.sellForm = this.fb.group({
      stocks: ['', Validators.required ],
      quantity: ['', Validators.required ],
      orderType: ['', Validators.required ],
      price: ['', Validators.required ]
    });

    this.stock.getStocks()
      .subscribe(data => this.selectStocks = data);
  }

  onOrderTypeChange() {
    if(this.sellForm.get('orderType').value === "limit") {
      this.enableSellPrice = true;
    }
    else {
      this.enableSellPrice = false;
    }
  }


  onSubmit() {
    this.submitted = true;
    if (this.sellForm.valid) {
      alert('Order Successful!');
    }
    else{
      alert('Error!Try Again');
    }
   // console.log(this.sellForm);
  }
}
