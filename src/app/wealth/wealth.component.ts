import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.css'],
})
export class WealthComponent implements OnInit {
  constructor(private fg: FormBuilder) {}
  wealth = this.fg.group({
    name: [''],
    type: [''],
    value: [''],
  });

  ngOnInit(): void {}
}
