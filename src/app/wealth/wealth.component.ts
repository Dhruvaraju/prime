import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceshopService } from '../services/serviceshop.service';

@Component({
  selector: 'app-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.css'],
})
export class WealthComponent implements OnInit {
  productAdded = false;
  errors = false;
  userName: string = localStorage.getItem('username');

  constructor(private fg: FormBuilder, private ck: ServiceshopService) {}
  wealthForm = this.fg.group({
    name: ['', Validators.required],
    type: [''],
    value: [''],
  });

  onSubmitWealth() {
    let pdtName = this.wealthForm.get('name').value;
    let pdtID = 'WM001';
    if (pdtName === 'longterm') {
      pdtID = 'WM002';
    }

    let wealthdata = {
      productID: pdtID,
      userName: this.userName,
    };

    this.ck.wealth(wealthdata).subscribe((response) => {
      console.log('Success!', response);
    });
  }

  ngOnInit(): void {}
}
