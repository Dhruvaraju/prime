import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  displayUserNav: boolean = false;
  username: string;
  userType: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.userType = localStorage.getItem('userType');
  }

  handleLogOut() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

}
