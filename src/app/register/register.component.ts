import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../password.validator';
import { formSubmitService } from '../services/login&register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;

  alreadyexists = false;
  errors = false;
  constructor(private fb: FormBuilder, private lr: formSubmitService) {}
  registrationForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      organisation: ['None'],
      pan: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      address01: ['', Validators.required],
      address02: ['None'],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalcode: ['', Validators.required],
      type: ['', Validators.required],
    },
    { validator: passwordValidator }
  );

  onsubmit() {
    let formData = {
      userName: this.registrationForm.get('username').value,
      firstName: this.registrationForm.get('firstname').value,
      lastName: this.registrationForm.get('lastname').value,
      email: this.registrationForm.get('email').value,
      organizationName: this.registrationForm.get('organisation').value,
      panNumber: this.registrationForm.get('pan').value,
      password: this.registrationForm.get('password').value,
      addressLine01: this.registrationForm.get('address01').value,
      addressLine02: this.registrationForm.get('address02').value,
      state: this.registrationForm.get('state').value,
      country: this.registrationForm.get('country').value,
      pincode: this.registrationForm.get('postalcode').value,
      userType: this.registrationForm.get('type').value,
    };

    this.lr.onFormSubmit(formData).subscribe(
      (response) => {
        console.log(response);
        if (response.message === 'User Registered Successfully') {
          this.submitted = true;
        } else {
          this.alreadyexists = true;
        }
      },
      (err) => {
        this.errors = true;
      }
    );
  }

  ngOnInit(): void {}
}
