import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {

  constructor(private fg: FormBuilder) {}
  income = this.fg.group({
    name: ['Income Plus'],
    type: ['Income Products'],
    value: [''],
  });

  ngOnInit(): void {}
}
