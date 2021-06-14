import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ServiceshopService} from '../services/serviceshop.service';

@Component({
  selector: 'app-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.css'],
})
export class WealthComponent implements OnInit {
  submitted = false;
  productAdded=false;
  errors=false;
  
  constructor(private fg: FormBuilder,private ck : ServiceshopService ) {}
  wealthForm = this.fg.group({
    name: ['',Validators.required],
    type: [''],
    value: [''],
  });

  
submit()
{
  let wealthdata={
    buyPrice:this.wealthForm.get('value').value,
    productName:this.wealthForm.get('value').value,
    productType:this.wealthForm.get('value').value}
    
    this.ck.wealth(wealthdata)
    .subscribe(response =>
      {
        console.log('Success!',response)
      })
}
 
    
  
  ngOnInit(): void {}
  
}
