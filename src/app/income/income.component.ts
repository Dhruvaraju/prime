import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {ServiceshopService} from '../services/serviceshop.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {

  submitted = false;
  
  alreadyexists=false;
  errors=false;

  constructor(private fg: FormBuilder, private ip : ServiceshopService ) {}
  incomeForm = this.fg.group({
    name: ['',Validators.required],
    type: [''],
    value: [''],
  });


  submit()
{
  let incomedata={
    buyPrice:this.incomeForm.get('value').value,
    productName:this.incomeForm.get('value').value,
    productType:this.incomeForm.get('value').value}
    
    this.ip.wealth(incomedata)
    .subscribe((response)=>{
      console.log(response)
      if  (response.message==='product added') {
       this.submitted = true; 
       
      }
      else{
        this.alreadyexists=true
      }
      
      },
      (err)=>{
        this.errors=true
      })
       
     
    
    }

  ngOnInit(): void {}
}
