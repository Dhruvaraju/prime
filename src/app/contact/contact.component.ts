import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  successfulSubmission: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messagingService: InternalServices
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [''],
      message: ['', Validators.required],
    });
  }

  contactFormSubmit() {
    const messageDetail = {
      userName: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      phoneNumber: this.contactForm.get('phoneNumber').value,
      message: this.contactForm.get('message').value,
    };

    this.messagingService.registerMessage(messageDetail).subscribe((res) => {
      if (res.status === 'ADDED') {
        this.successfulSubmission = true;
        this.contactForm.reset();
      }
    });
  }
}
