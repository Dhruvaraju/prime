import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  constructor(private fb: FormBuilder) {}
  registrationForm = this.fb.group(
    {
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', Validators.required],
      pan: ['', [Validators.required, Validators.maxLength(10)]],
      address01: ['', Validators.required],
      address02: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalcode: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      type: ['', Validators.required],
      organisation: ['None'],
    },
    { validator: passwordValidator }
  );

  onsubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {}
}
