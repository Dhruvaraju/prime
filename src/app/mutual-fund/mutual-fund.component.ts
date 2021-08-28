import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css'],
})
export class MutualFundComponent implements OnInit {
  SuccessStatement = '';
  FailureStatement = '';
  disableAfterSubmit: boolean = false;
  registrationSuccess: boolean = false;
  registrationFailed: boolean = false;
  userName: string = localStorage.getItem('username');
  RegistrationForm: FormGroup;
  ReturnsCalculated: any;
  Returns: any;
  Amt: any;

  constructor(
    private builder: FormBuilder,
    private mutualFundService: InternalServices
  ) {}
  ngOnInit() {
    this.RegistrationForm = this.builder.group({
      fundType: new FormControl('', Validators.required),
      riskLevel: new FormControl('', Validators.required),
      tenure: new FormControl('', Validators.required),
      amtInvested: new FormControl('', [
        Validators.required,
        Validators.min(1000),
      ]),
      paymentPattern: new FormControl('', Validators.required),
    });
  }

  mutualFundFormSubmit() {
    let mutualFundRequest = {
      fundType: this.RegistrationForm.get('fundType').value,
      riskLevel: this.RegistrationForm.get('riskLevel').value,
      tenure: this.RegistrationForm.get('tenure').value,
      investmentAmount: this.RegistrationForm.get('amtInvested').value,
      paymentMode: this.RegistrationForm.get('paymentPattern').value,
      maturityAmount: this.Returns,
      userName: this.userName,
    };
    this.mutualFundService.registerMutualFund(mutualFundRequest).subscribe(
      (res) => {
        if (res.status === 'ADDED') {
          this.SuccessStatement =
            'Successfully registered!!! services initiated';
          this.disableAfterSubmit = true;
          this.registrationSuccess = true;
        }
      },
      (error) => {
        this.registrationFailed = true;
        this.FailureStatement = 'System currently unavailable';
      }
    );
  }
  calculateReturns() {
    if (this.RegistrationForm.get('paymentPattern').value == 'Monthly') {
      this.Amt =
        this.RegistrationForm.get('amtInvested').value *
        (this.RegistrationForm.get('tenure').value * 12);
    } else {
      this.Amt =
        this.RegistrationForm.get('amtInvested').value *
        (this.RegistrationForm.get('tenure').value * 3);
    }

    if (this.RegistrationForm.get('riskLevel').value == 'Titanium') {
      this.ReturnsCalculated = (this.Amt * 25) / 100;
      this.Returns = this.ReturnsCalculated + this.Amt;
    } else if (this.RegistrationForm.get('riskLevel').value == 'Platinum') {
      this.ReturnsCalculated = (this.Amt * 21) / 100;
      this.Returns = this.ReturnsCalculated + this.Amt;
    } else {
      this.ReturnsCalculated = (this.Amt * 15) / 100;
      this.Returns = this.ReturnsCalculated + this.Amt;
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
