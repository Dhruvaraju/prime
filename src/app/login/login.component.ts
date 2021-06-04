import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {formSubmitService} from '../services/login&register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message=false

  constructor(private fg:FormBuilder,
     private rl:formSubmitService,private router:Router) { }
  loginPage=this.fg.group({
    username:['',Validators.required],
    password:['',Validators.required]
    
  })

  ngOnInit(): void {
  }
  onLogin(){
    let loginaccept={
      userName:this.loginPage.get('username').value,
      password:this.loginPage.get('password').value
    }


    this.rl.onLoginAttempt(loginaccept)
    .subscribe((response)=>{
      console.log(response)
      if ((response) === true){
        this.router.navigate(['/dashboard'])
      }
      else{
        this.message=true
      }
    },
    error=>{
      this.message=true
    })

  }
}
