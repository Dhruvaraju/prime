import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
status="";
hide=true;
  constructor() { 
  }
  ngOnInit(): void {
  }
createserver()
{
  this.status="Successfully registered!!! IPO services initiated, you will be informed once IPO quote is prepared";
  this.hide=false;
}
registrationForm = new FormGroup({
  'cpyname': new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
]),
    'mvalue': new FormControl('',
     Validators.required),
     'per': new FormControl('',
     Validators.required),
     'but': new FormControl('',Validators.compose([
       Validators.required])
       )
})

}
