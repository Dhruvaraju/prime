import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  state="";
  registrationForm :FormGroup;

  constructor(private builder: FormBuilder) { }
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
