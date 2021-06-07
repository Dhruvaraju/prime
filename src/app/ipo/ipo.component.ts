import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { IporegistrationService } from '../services/ipo/iporegistration.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
  state="";
  RegistrationForm :FormGroup;
  //message =false;
  //submitted = false;
  //successfulRegistration=false;
  //errors=false;
  constructor(private builder: FormBuilder,private _reg:IporegistrationService) { }
  ngOnInit() {
  
    this.RegistrationForm = this.builder.group({
      'cpyname': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
    ]),
        'mvalue': new FormControl('',
         Validators.required),
         'per': new FormControl('',
         Validators.required),           
    })
  }

  
   onsubmit()
   {
     console.log("hello world success");
            let iporegdetail={
              userName :"deepika",
              companyName :this.RegistrationForm.get('cpyname').value,
             currentMarketCap :this.RegistrationForm.get('mvalue').value,
              openForSale :this.RegistrationForm.get('per').value,
              
              }
             // this.submitted = true;
          
              this._reg.register(iporegdetail)
              .subscribe((response)=>{
                console.log(response)
                if ((response.status===200) || (response.value==='Success')){
               // this.successfulRegistration=true
                this.state="Success";
                console.log("working");
                }
                },
                (error)=>{
                 // this.errors=true
                  this.state="failure";
                  console.log(error);
                })
     }
  }
