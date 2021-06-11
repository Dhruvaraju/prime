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
  states="";
  RegistrationForm :FormGroup;

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

  
   onSubmit()
   {
     console.log("for my reference");

            let iporegdetail=
            {
              availableForSale :this.RegistrationForm.get('per').value,
              companyName :this.RegistrationForm.get('cpyname').value,
              marketCap :this.RegistrationForm.get('mvalue').value,
              userName :"karthikank" //this.loginPage.get('username').value,
            // "ipoQuote":
             // {
             //   "description" :" ",
            //    "issueDate":" ",
            //    "issueSize":" ",
            //    "issuePrice":" ",
            //    "lotSize": " ",
             //   "closingDate": " "
            //  }
            }
          
            this._reg.register(iporegdetail)
            .subscribe((response)=>{
              console.log(response)
              if ((response.status===200) || (response.message==='Success')){
               this.state="Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared";
               console.log("success");
              }
              
              },
              (error)=>{
                this.states="System currently unavailable contact our banking representative to initiate the process";
                console.log(error);
              })
     }
  }
