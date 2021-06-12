import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {

  constructor(private fg: FormBuilder) {}
  incomeForm = this.fg.group({
    name: ['',Validators.required],
    type: [''],
    value: [''],
  });

  ngOnInit(): void {}
}
