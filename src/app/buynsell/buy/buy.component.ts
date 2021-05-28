import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StocksService } from './../../services/stocks.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  
  submitted = false;
  public selectStocks = [];
  enableBillPrice: boolean = false;
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

  constructor( private fb: FormBuilder, 
               private stock: StocksService ) { }


  ngOnInit() {
  this.buyForm = this.fb.group({
    stocks: ['', Validators.required],
    quantity: ['', Validators.required],
    orderType: ['', Validators.required],
    price: ['', Validators.required]
  });

  this.stock.getStocks()
    .subscribe(data => this.selectStocks = data);
  }

  onOrderTypeChange() {
    if(this.buyForm.get('orderType').value === "limit") {
      this.enableBillPrice = true;
    }
    else {
      this.enableBillPrice = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.buyForm.valid) {
      alert('Product Added to your Portfolio!');
    }
    else{
      alert('Error!Try Again');
    }
  //  console.log(this.buyForm);
  }

}
