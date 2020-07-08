import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  @Output() toggleBlock = new EventEmitter<String>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required ],
      confirm: ['', Validators.required ]
    });
  }

  toggleSignup() {
    this.toggleBlock.next('signin');
  }

  submitForm() {
    
  }

}
