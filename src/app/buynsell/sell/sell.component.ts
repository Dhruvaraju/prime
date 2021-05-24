import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sellForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.sellForm = new FormGroup({
      'stocks'    : new FormControl(null, Validators.required),
      'quantity'  : new FormControl(null, Validators.required),
      'orderType' : new FormControl(null, Validators.required),
      'price'     : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.sellForm);
  }
}
