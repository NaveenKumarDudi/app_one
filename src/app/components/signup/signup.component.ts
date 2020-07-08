import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  matchError: string = null;
  loading: boolean = false;
  userInstance: IUser;

  @Output() toggleBlock = new EventEmitter<String>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      contact: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')
      ]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required ],
      confirm: ['', Validators.required ]
    });
  }

  toggleSignup() {
    this.toggleBlock.next('signin');
  }

  submitForm() {
    console.log(this.signupForm.controls['contact']);
    if (this.signupForm.invalid) {
      return;
    }

    if (this.signupForm.value.password !== this.signupForm.value.confirm) {
      this.matchError = 'Password not matching !';
      return;
    }

    let modifiedUser = {...this.userInstance};
    modifiedUser.userId = this.signupForm.value.email;
    modifiedUser.password = this.signupForm.value.password;
    modifiedUser.first_name = this.signupForm.value.first_name;
    modifiedUser.last_name = this.signupForm.value.last_name;
    modifiedUser.contact = this.signupForm.value.contact;

    this.userService.register(modifiedUser);

  }

}
