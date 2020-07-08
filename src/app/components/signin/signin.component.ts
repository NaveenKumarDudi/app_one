import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/User';
import { SharedService } from 'src/app/services/shared.service';
import { IError } from 'src/app/models/Error';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  matchError: string = null;
  loading: boolean = false;
  userInstance: IUser;

  @Output() toggleBlock = new EventEmitter<String>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
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

  toggleSignin() {
    this.toggleBlock.emit('signup');
  }
 
  submitForm() {
    if (this.signinForm.invalid) {
      this.signinForm.controls['email'].markAsTouched();
      this.signinForm.controls['password'].markAsTouched();
      return;
    }

    let modifiedUser = {...this.userInstance};
    modifiedUser.userId = this.signinForm.value.email;
    modifiedUser.password = this.signinForm.value.password;

    this.userService.login(modifiedUser);

  }

}
