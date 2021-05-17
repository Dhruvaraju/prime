import { Component, OnInit } from '@angular/core';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

@Component({
  selector: 'app-buynsell',
  templateUrl: './buynsell.component.html',
  styleUrls: ['./buynsell.component.css']
})
export class BuynsellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
