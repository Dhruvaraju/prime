import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { IporegistrationService } from '../services/ipo/iporegistration.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css'],
})
export class IpoComponent implements OnInit {
  SucessStatement="";
  FailureStatement="";
  showhiddenbutton :boolean=false;
  disableafterclick:boolean=false;
  userName: string = localStorage.getItem('username');
  RegistrationForm :FormGroup;

  constructor(
    private builder: FormBuilder,
    private _reg: IporegistrationService
  ) {}
  ngOnInit() {
    this.RegistrationForm = this.builder.group({
      cpyname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      marketvalue: new FormControl('', Validators.required),
      marketcappercent: new FormControl('', Validators.required),
    });
  }

  invokeformsubmit() {
    let iporegdetail = {
      availableForSale: this.RegistrationForm.get('marketcappercent').value,
      closingDate: ' ',
      companyName: this.RegistrationForm.get('cpyname').value,
      description: ' ',
      id: 0,
      issueDate: '',
      issuePrice: 0,
      issueSize: 0,
      lotSize: 0,
      marketCap: this.RegistrationForm.get('marketvalue').value,
      userName: this.userName,
    };

    this._reg.register(iporegdetail).subscribe(
      (response) => {
        console.log(response);
        if (
          response.message === 'ipo registered successfully' ||
          response.status === 200
        ) {
          this.SucessStatement =
            'Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared';
          console.log('success');
          this.showhiddenbutton=true;
        }
      },
      (error) => {
        this.FailureStatement =
          'System currently unavailable contact our banking representative to initiate the process';
        console.log(error);
      }
    );
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  calldisable()
  {
    this.disableafterclick=true;
  }
}
