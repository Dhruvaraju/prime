import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.css'],
})
export class WealthComponent implements OnInit {
  submitted = false;
  productAdded=false;
  errors=false;
  
  constructor(private fg: FormBuilder) {}
  wealthForm = this.fg.group({
    name: ['',Validators.required],
    type: [''],
    value: [''],
  });


  onsubmit() {
    let formData={
      productName:this.wealthForm.get('name').value,
    }
  }
  ngOnInit(): void {}
  
}
