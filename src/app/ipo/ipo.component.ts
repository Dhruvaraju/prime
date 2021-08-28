import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css'],
})
export class IpoComponent implements OnInit {
  SuccessStatement = '';
  FailureStatement = '';
  showIpoQuote: boolean = false;
  disableAfterSubmit: boolean = false;
  registrationSuccess: boolean = false;
  registrationFailed: boolean = false;
  userName: string = localStorage.getItem('username');
  RegistrationForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private ipoService: InternalServices
  ) {}
  ngOnInit() {
    this.RegistrationForm = this.builder.group({
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      marketValue: new FormControl('', Validators.required),
      mCapPercent: new FormControl('', Validators.required),
    });
  }

  ipoFormSubmission() {
    let ipoRequest = {
      salePercentage: this.RegistrationForm.get('mCapPercent').value,
      companyName: this.RegistrationForm.get('companyName').value,
      marketCap: this.RegistrationForm.get('marketValue').value,
      userName: this.userName,
    };

    this.ipoService.registerIpo(ipoRequest).subscribe(
      (res) => {
        if (res.status === 'ADDED') {
          this.SuccessStatement =
            'Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared';
          console.log('success');
          this.disableAfterSubmit = true;
          this.registrationSuccess = true;
          this.showIpoQuote = true;
        }
      },
      (error) => {
        this.registrationFailed = true;
        this.FailureStatement =
          'System currently unavailable contact our banking representative to initiate the process';
        console.log(error);
      }
    );
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
