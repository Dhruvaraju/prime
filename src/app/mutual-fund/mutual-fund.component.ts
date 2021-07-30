import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MutualFundregistrationService } from '../services/mutual-fund/mutualfundregistration.service';
@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css']
})
export class MutualFundComponent implements OnInit {

  SuccessStatement = '';
  FailureStatement = '';
  showhiddenbutton: boolean = false;
  disableafterclick: boolean = false;
  statuscheck: boolean = false;
  statuserror: boolean = false;
  userName: string = localStorage.getItem('username');
  RegistrationForm: FormGroup;
  ReturnsCalculated: any ;
  Returns: any;
  Amt: any;

  constructor(
    private builder: FormBuilder,
    private _reg: MutualFundregistrationService
  ) {}
  ngOnInit() {
    this.RegistrationForm = this.builder.group({
      fundtype: new FormControl('', Validators.required),
      risklevel: new FormControl('', Validators.required),
      tenure: new FormControl('', Validators.required),
      amtinvested: new FormControl('', [Validators.required,Validators.min(1000)]),
      paymentpattern: new FormControl('', Validators.required),
      
    });
  }

  invokeformsubmit() {
    let mutualregdetail = {
      
      
      FundType : this.RegistrationForm.get('fundtype').value,
      RiskLevel: this.RegistrationForm.get('risklevel').value,
      Tenure : this.RegistrationForm.get('tenure').value,
      AmountInvested: this.RegistrationForm.get('amtinvested').value,
      PaymentPattern: this.RegistrationForm.get('paymentpattern').value,
      userName: this.userName,
      
    };
   //console.log(mutualregdetail);

    this._reg.register(mutualregdetail).subscribe(
      (response) => {
        console.log(response);
        if (
          response.message === ' Registered successfully' ||
          response.status === 200
        ) {
          this.SuccessStatement =
            'Successfully registered!!! services initiated';
          console.log('success');
          this.calldisable();
          this.statuscheck = true;
          this.showhiddenbutton = true;
        }
      },
      (error) => {
        this.statuserror = true;
        this.FailureStatement =
          'System currently unavailable';
        console.log(error);
      }
    );

  }
  invokeformcalculate(){
    
    
    
    if(this.RegistrationForm.get('paymentpattern').value=="Monthly")
    {
    this.Amt=this.RegistrationForm.get('amtinvested').value * (this.RegistrationForm.get('tenure').value *12);
    }
    if(this.RegistrationForm.get('paymentpattern').value=="Quarterly")
    {
      //this.ReturnsCalculated = (this.RegistrationForm.get('amtinvested').value) * (1+0.12*this.RegistrationForm.get('tenure').value)^this.RegistrationForm.get('tenure').value*2 ;
      this.Amt=this.RegistrationForm.get('amtinvested').value * (this.RegistrationForm.get('tenure').value *3);
    }
    //this.ReturnsCalculated = ((this.RegistrationForm.get('amtinvested').value *(11/100)*12)/((Math.pow((1+(.11*12)),(this.RegistrationForm.get('tenure').value*12))-1)));
    // this.ReturnsCalculated = this.RegistrationForm.get('amtinvested').value  * (((this.RegistrationForm.get('tenure').value + (12/100)) (12 -1)) / (12/100)) * (1 + (12/100));
    //this.ReturnsCalculated = ((this.RegistrationForm.get('amtinvested').value *(.12/12))/((1+(.12/12))^(((this.RegistrationForm.get('tenure').value*12))-1)));
    if(this.RegistrationForm.get('risklevel').value=="Titanium")
    {
    
    this.ReturnsCalculated = (this.Amt* 25)/100;
    this.Returns = (this.ReturnsCalculated+this.Amt);
    }
     if(this.RegistrationForm.get('risklevel').value=="Platinum")
    {
   
    this.ReturnsCalculated = (this.Amt* 21)/100;
    this.Returns = (this.ReturnsCalculated+this.Amt);
    }
    if(this.RegistrationForm.get('risklevel').value=="Diamond")
    {
      this.ReturnsCalculated = (this.Amt* 15)/100;
     this.Returns = (this.ReturnsCalculated+this.Amt);

    }

  
    //console.log('hello'+' '+ this.ReturnsCalculated);
   //this.RegistrationForm.reset();
   }
   
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  calldisable() {
    this.disableafterclick = true;
  }
}
