import { Component, OnInit } from '@angular/core';
import { IpoquoteserviceService } from 'src/app/services/ipo/ipoquoteservice.service';

@Component({
  selector: 'app-ipoquote',
  templateUrl: './ipoquote.component.html',
  styleUrls: ['./ipoquote.component.css']
})
export class IpoquoteComponent implements OnInit {


   public quotation=[];
  
    constructor(private _quote:IpoquoteserviceService){}

ngOnInit(){
    this._quote.getfeatures()
    .subscribe((data) => this.quotation=data)
  }

    }
