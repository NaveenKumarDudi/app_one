import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { IError } from 'src/app/models/Error';
import { SharedService } from 'src/app/services/shared.service';

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
    private userService: UserService,
    private sharedService: SharedService
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

    this.userService.getLoading().subscribe(
      data => this.loading = data
    );

    this.userService.getErrors().subscribe(
      (data: IError) =>  {
        if (data) {
          this.sharedService.notify('error', data.friendly);
        }
      }
    );

    this.userService.getIsAuthenticated().subscribe(
      (data) =>  {
        if (data) {
          this.sharedService.notify('success', 'Sign in successfull !');
        }
      }
    )

  }

  toggleSignup() {
    this.toggleBlock.next('signin');
  }

  submitForm() {    

    if (this.signupForm.invalid) {
      this.signupForm.controls['first_name'].markAsTouched();
      this.signupForm.controls['last_name'].markAsTouched();
      this.signupForm.controls['contact'].markAsTouched();
      this.signupForm.controls['email'].markAsTouched();
      this.signupForm.controls['password'].markAsTouched();
      this.signupForm.controls['confirm'].markAsTouched();
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
