import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  supportForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.supportForm = this.formBuilder.group({
      issueHeading: ['', Validators.required],
      issueDescription: ['', Validators.required],
    });
    document.getElementById("launchMessage").click();
  }

  supportFormSubmit(){
    
  }
}
