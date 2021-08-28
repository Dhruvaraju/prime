import { Component, OnInit } from '@angular/core';
import { InternalServices } from '../../services/investments/internal.service';

@Component({
  selector: 'app-ipoquote',
  templateUrl: './ipoquote.component.html',
  styleUrls: ['./ipoquote.component.css'],
})
export class IpoquoteComponent implements OnInit {
  userName: string = localStorage.getItem('username');

  public ipoDetailList = [];

  constructor(private ipoService: InternalServices) {}

  ngOnInit() {
    this.ipoService
      .ipoOwnedByUser(this.userName)
      .subscribe((data) => (this.ipoDetailList = data));
  }
}
