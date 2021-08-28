import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidCredentials = false;
  serviceFailed: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: InternalServices
  ) {}
  loginPage = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onLoginFormSubmit() {
    this.serviceFailed = false;
    let authenticateRequest = {
      userName: this.loginPage.get('username').value,
      password: this.loginPage.get('password').value,
    };

    this.loginService.authenticateUser(authenticateRequest).subscribe(
      (response) => {
        if (response.authenticated === true) {
          localStorage.setItem('username', response.userName);
          localStorage.setItem('userType', response.userType);
          localStorage.setItem('validated', response.authenticated);
          localStorage.setItem('registeredDate', response.userFrom);
          localStorage.setItem('lastLogin',response.lastLoginDate);
          this.router.navigate(['/dashboard']);
        } else {
          this.invalidCredentials = true;
        }
      },
      (error) => {
        this.serviceFailed = true;
      }
    );
  }
}
