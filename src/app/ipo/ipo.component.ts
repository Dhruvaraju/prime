import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
status="";
hide=true;
  constructor() { 
  }
  ngOnInit(): void {
  }
createserver()
{
  this.status="Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared";
  this.hide=false;
}
}
