import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CcsService } from '../services/external/ccs.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  supportForm: FormGroup;
  displayRegister: boolean = true;
  displayTicketDetails: boolean = false;
  ticketRegistered: string;
  ticketRegistrationFail: boolean;
  fetchTicketsFail: boolean = false;
  registeredTicket: string;
  ticketList: any;
  username: string = localStorage.getItem('username');

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: CcsService
  ) {}

  ngOnInit(): void {
    this.supportForm = this.formBuilder.group({
      issueHeading: ['', Validators.required],
      issueDescription: ['', Validators.required],
    });

    this.ticketService
      .ticketsOwned(this.username)
      .subscribe((res) => {
        this.fetchTicketsFail = false;
        this.ticketList = res;
      },
      err => {
        this.fetchTicketsFail = true;
      });
  }

  supportFormSubmit() {
    this.ticketRegistered = undefined;
    let ticketDetails = {
      userName: this.username,
      issue: this.supportForm.get('issueHeading').value,
      description: this.supportForm.get('issueDescription').value,
    };
    this.ticketService.registerTicket(ticketDetails).subscribe(
      (res) => {
        this.ticketRegistered = "SUCCESS";
        this.registeredTicket = res.message;
        this.supportForm.reset();
      },
      (err) => {
        this.ticketRegistered = "FAIL";
      }
    );
  }

  displayRegisterClick() {
    this.ticketRegistered = undefined;
    this.displayRegister = true;
    this.displayTicketDetails = false;
  }

  viewTicketClick() {
    this.ticketRegistered = undefined;
    this.displayRegister = false;
    this.displayTicketDetails = true;
    this.ticketService
      .ticketsOwned(localStorage.getItem('username'))
      .subscribe((res) => {
        this.fetchTicketsFail = false;
        this.ticketList = res;
      },
      err => {
        this.fetchTicketsFail = true;
      });
  }
}
