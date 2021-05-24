import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  billForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.billForm = new FormGroup({
      'stocks'    : new FormControl(null, Validators.required),
      'quantity'  : new FormControl(null, Validators.required),
      'orderType' : new FormControl(null, Validators.required),
      'price'     : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.billForm);
  }

}
