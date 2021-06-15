import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceshopService } from '../services/serviceshop.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  userName: string = localStorage.getItem('username');
  submitted = false;

  alreadyexists = false;
  errors = false;

  constructor(private fg: FormBuilder, private ip: ServiceshopService) {}
  incomeForm = this.fg.group({
    name: ['', Validators.required],
    type: [''],
    value: [''],
  });

  onSubmitIncome() {
    let pdtName = this.incomeForm.get('name').value;

    let incomedata = {
      productID: 'I001',
      userName: this.userName,
    };

    this.ip.income(incomedata).subscribe((response) => {
      console.log('Success!', response);
    });
  }

  ngOnInit(): void {}
}
