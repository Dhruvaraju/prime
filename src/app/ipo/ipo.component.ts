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
  registrationForm :FormGroup;

  constructor(private builder: FormBuilder,private _reg:IporegistrationService) { }
  ngOnInit() {
    this.registrationForm = this.builder.group({
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

Submit(){
    
  /*this._reg.register(this.registrationForm.value)
  .subscribe(
    
   response => console.log("Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared",response),
    error=>console.log("System currently unavailable contact our banking representative to initiate the process",error)
  );
}*/
 if(this.registrationForm.status==="VALID")
  {
    this.state="Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared";
  }
  else if(this.registrationForm.status==="INVALID")
  {
    this.state="System currently unavailable contact our banking representative to initiate the process";
  }
}

}
