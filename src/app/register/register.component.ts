import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { loginFormValidator } from './password.validator';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userAdded = false;
  userExists = false;
  errors = false;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: InternalServices
  ) {}
  registrationForm = this.formBuilder.group(
    {
      username: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      organization: ['None'],
      pan: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address01: ['', Validators.required],
      address02: ['Address Line 02'],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      type: ['', Validators.required],
    },
    { validators: loginFormValidator.validatePassword }
  );

  onsubmit() {
    let customerInfo = {
      userName: this.registrationForm.get('username').value,
      firstName: this.registrationForm.get('firstName').value,
      lastName: this.registrationForm.get('lastName').value,
      email: this.registrationForm.get('email').value,
      organizationName: this.registrationForm.get('organization').value,
      panNumber: this.registrationForm.get('pan').value,
      password: this.registrationForm.get('password').value,
      addressLine01: this.registrationForm.get('address01').value,
      addressLine02: this.registrationForm.get('address02').value,
      state: this.registrationForm.get('state').value,
      country: this.registrationForm.get('country').value,
      pincode: this.registrationForm.get('postalCode').value,
      userType: this.registrationForm.get('type').value,
    };

    this.registerService.registerUser(customerInfo).subscribe(
      (response) => {
        console.log(response);
        if (response.status === 'ADDED') {
          this.userAdded = true;
        } else {
          this.userExists = true;
        }
      },
      (err) => {
        this.errors = true;
      }
    );
  }

  ngOnInit(): void {}
}
